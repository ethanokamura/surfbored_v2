use axum::extract::Extension;
use crate::auth::SupabaseClaims;

pub async fn get_profile(Extension(claims): Extension<SupabaseClaims>) -> String {
    format!("Hello, user with ID: {}", claims.sub)
}
