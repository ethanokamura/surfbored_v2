# Surfbored Backend

server/
├── src/
│   ├── auth.rs           # JWT encode/decode, middleware
│   ├── handlers.rs       # Your route logic (GET /posts, etc.)
│   ├── main.rs           # Axum server entry point
├── .env                  # Database + JWT secret config
├── Cargo.toml

