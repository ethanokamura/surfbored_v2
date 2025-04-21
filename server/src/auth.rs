use axum::{
  http::{Request, StatusCode},
  middleware::Next,
  response::Response,
};
use jsonwebtoken::{decode, DecodingKey, Validation};
use serde::Deserialize;
use std::env;

#[derive(Debug, Clone, Deserialize)]
pub struct SupabaseClaims {
  pub sub: String, // user ID
  pub email: Option<String>,
  pub exp: usize,
}

pub async fn auth_middleware<B>(mut req: Request<B>, next: Next<B>) -> Result<Response, StatusCode> {
  let Some(auth_header) = req.headers().get("authorization") else {
      return Err(StatusCode::UNAUTHORIZED);
  };

  let token = auth_header
      .to_str()
      .ok()
      .and_then(|s| s.strip_prefix("Bearer "))
      .ok_or(StatusCode::UNAUTHORIZED)?;

  let jwt_secret = env::var("SUPABASE_JWT_SECRET").expect("Missing SUPABASE_JWT_SECRET");

  let token_data = decode::<SupabaseClaims>(
      token,
      &DecodingKey::from_secret(jwt_secret.as_ref()),
      &Validation::default(),
  )
  .map_err(|_| StatusCode::UNAUTHORIZED)?;

  req.extensions_mut().insert(token_data.claims);
  Ok(next.run(req).await)
}
