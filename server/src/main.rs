use axum::{Router, routing::get, middleware};
use dotenvy::dotenv;
use std::net::SocketAddr;

mod auth;
mod handlers;

#[tokio::main]
async fn main() {
    dotenv().ok();

    let protected_routes = Router::new()
        .route("/profile", get(handlers::get_profile))
        .layer(middleware::from_fn(auth::auth_middleware));

    let app = Router::new()
        .nest("/api", protected_routes);

    let addr: SocketAddr = "127.0.0.1:3000".parse().unwrap();
    println!("Listening on http://{}", addr);

    axum::Server::bind(&addr)
        .serve(app.into_make_service())
        .await
        .unwrap();
}
