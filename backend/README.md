# STAI Backend

This backend provides RESTful APIs for the STAI mobile app, including user management, assistants, projects, content, and AI integration (Gemini).

## Structure

- `server.js` — Express app entry point
- `models/` — Sequelize models (User, Assistant, Project, Content, Log)
- `routes/` — API route handlers
- `controllers/` — Business logic for each resource
- `config/` — Database and environment configuration
- `services/` — Integration with Gemini API and other services

## Setup

1. Install dependencies: `npm install`
2. Configure environment variables in `.env`
3. Run the server: `npm start`

## Main APIs

- `/api/auth`
- `/api/user`
- `/api/assistants`
- `/api/projects`
- `/api/contents`
- `/api/ai`

## Database

Uses PostgreSQL via Sequelize ORM.

## AI Integration

Gemini API integration for content generation.
