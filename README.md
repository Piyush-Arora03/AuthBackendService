# AuthService

A Node.js authentication service using Express, Sequelize, JWT, and MySQL.

## Features

- User signup and signin with JWT authentication
- Role-based access control (ADMIN, CUSTOMER, AIRLINE_BUSINESS)
- Sequelize ORM for MySQL database
- Password hashing with bcrypt
- RESTful API structure

## Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/)
- [MySQL](https://www.mysql.com/) database

## Getting Started

### 1. Clone the Repository

```sh
git clone https://github.com/Piyush-Arora03/AuthBackendService.git
cd AuthService
```

### 2. Install Dependencies

```sh
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory:

```properties
PORT=3001
JWT_KEY=your_jwt_secret_key
```

### 4. Configure Database

Edit `src/Config/config.json` with your MySQL credentials for development, test, and production environments.

Example:

```json
{
  "development": {
    "username": "root",
    "password": "yourpassword",
    "database": "auth_db",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```

### 5. Run Migrations

Create the necessary tables:

```sh
npx sequelize-cli db:migrate
```

### 6. Seed Roles

Seed initial roles (ADMIN, CUSTOMER, AIRLINE_BUSINESS):

```sh
npx sequelize-cli db:seed:all
```

### 7. Start the Server

```sh
npm start
```

Server will run on the port specified in `.env` (default: 3001).

## API Endpoints

Base URL: `/api/v1`

### Auth Routes

- `POST /api/v1/signup`  
  Create a new user  
  **Body:** `{ "email": "user@example.com", "password": "yourpassword" }`

- `POST /api/v1/signin`  
  Sign in and get JWT token  
  **Body:** `{ "email": "user@example.com", "password": "yourpassword" }`

- `GET /api/v1/user?id=USER_ID`  
  Get user details by ID

- `GET /api/v1/isAuthenticated`  
  Check if JWT token is valid  
  **Header:** `x-access-token: <JWT_TOKEN>`

- `GET /api/v1/isAdmin`  
  Check if user is admin  
  **Body:** `{ "id": USER_ID }`

## Project Structure

```
src/
  index.js
  Config/
    config.json
    ServerConfig.js
  Controllers/
    UserController.js
  Middlewares/
    AuthReqValidator.js
    index.js
  migrations/
    <migration files>
  Models/
    index.js
    role.js
    user.js
  Repository/
    index.js
    User_Repo.js
  Routes/
    index.js
    v1/
      index.js
  seeders/
    <seeder files>
  Service/
    index.js
    UserService.js
  Utils/
    ErrorHandler.js
    Response.js
    ValidationError.js
.env
package.json
README.md
```

## Development

- Use [nodemon](https://nodemon.io/) for auto-reloading during development (`npm start`).
- Update models and migrations as needed for new features.
- Add more middlewares for advanced validation and error handling.

## License

ISC

## Author

Piyush Arora
