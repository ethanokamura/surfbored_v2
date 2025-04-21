# Surfbored V2 🌊 - The real deal

Surfing the web is for boomers. Surf some boards and find cool shit to do.

## Why? 🤔

Need something to do today? Create boards with your favorite activities! Or better yet, find someone else's board to find something new.
Have trouble choosing? SurfBored will pick activities at random so you dont have to!
Connect with friends and make collaborative boards!

## How it works: 🔍

Create and share activities by creating a post!
Create and share collections of your favorite activites via boards.
Find an activity you like? Add it to the board of your choosing.
Find a board you like? Like it and add it to you library of boards.

## Tech Stack:
The current tech stack for this project:

**Frontend**: (Dart + TypeScript)
  - Flutter: Great for cross-platform mobile. Fast dev cycles, smooth UI, single codebase.
  - React & Tailwind: A proven combo for fast, modern UIs on the web.
  - Next.js: SSR, SEO, routing, and API routes built-in.
  - Tauri: Lightweight, secure alternative to Electron. Uses native system webviews — perfect for turning SurfBored into a desktop app with minimal overhead.

**Database**: (PostgreSQL + TypeScript)
  - Postgres (via Supabase): Powerful relational model, ideal for structured data like users, posts, comments, and reactions.
  - Supabase Storage with Amazon S3 Bucket: File storage (images)

**Backend**:
- Twillio Verify: Phone number authentication
- Axum: Clean, ergonomic, and fast. Perfect for writing safe, async web APIs.
- Sqlx: Type-safe SQL — compile-time checks mean fewer bugs in production. Fantastic with Axum.
- jsonwebtoken: Standard for stateless authentication.
- reqwest: Reliable and async-friendly for external APIs (Gemini, etc.).
- Tauri IPC: Secure IPC means tighter integration with the frontend.
- FCM: Push notifications for mobile
