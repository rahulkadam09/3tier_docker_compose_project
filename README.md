# 3-Tier Docker Compose Project

A three-tier web application demonstrating containerization and multi-container orchestration using Docker and Docker Compose, with MongoDB for database storage.

## Architecture

- **Frontend:** User interface
- **Backend:** Application logic and API
- **Database:** MongoDB for data persistence

```text
          User / Browser
                |
                v
             Frontend
                |
                v
              Backend
                |
                v
              MongoDB
```

## Tech Stack

- Docker
- Docker Compose
- MongoDB
- Frontend and Backend Application
- Environment Variables (`.env`)

## Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- Git

Verify your installation:

```bash
docker --version
docker compose version
```

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/rahulkadam09/3tier_docker_compose_project.git
cd 3tier_docker_compose_project
```

### 2. Configure Environment Variables

Create a `.env` file in the project root directory, alongside your `docker-compose.yaml` or `docker-compose.yml` file.

Add your MongoDB connection URI:

```env
MONGO_URI=mongodb://mongodb:27017/your_database
```

**Important:**
- Replace `your_database` with your database name.
- Replace `mongodb` with the MongoDB service name defined in your Compose file.
- If using MongoDB Atlas, use the connection URI provided by Atlas instead.
- Do not commit credentials or sensitive connection strings to GitHub.

Ensure `.env` is included in your `.gitignore`:

```gitignore
.env
```

The backend application must load `MONGO_URI` from the environment, and Docker Compose must pass it to the backend container. For example:

```yaml
services:
  backend:
    environment:
      MONGO_URI: ${MONGO_URI}
```

### 3. Build and Start the Application

Ensure Docker Desktop is running, then execute:

```bash
docker compose up --build -d
```

### 4. Verify Running Containers

```bash
docker compose ps
```

### 5. View Application Logs

```bash
docker compose logs -f
```

To view logs for a specific service:

```bash
docker compose logs -f backend
```

### 6. Stop the Application

```bash
docker compose down
```

To remove the containers and associated Compose-created network, run the same command. Persistent named volumes are retained unless explicitly removed.

## Useful Docker Commands

| Command | Purpose |
|---|---|
| `docker compose up -d` | Start services |
| `docker compose up --build -d` | Build and start services |
| `docker compose ps` | Check container status |
| `docker compose logs -f` | Follow service logs |
| `docker compose restart` | Restart services |
| `docker compose down` | Stop and remove containers |
| `docker compose config` | Validate Compose configuration |

## Key Learnings

- Containerizing frontend and backend applications.
- Managing multiple services using Docker Compose.
- Connecting application services to MongoDB.
- Configuring environment variables and database connection URIs.
- Managing container lifecycle, logs, and service networking.

## Author

**Rahul Kadam**

GitHub: [rahulkadam09](https://github.com/rahulkadam09)
