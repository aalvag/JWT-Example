# JWT Authentication Project

This project is a Node.js application that implements user authentication using JSON Web Tokens (JWT) with Passport.js and Express.

## Features

- User registration
- User login with JWT generation
- Route protection using JWT authentication
- Token storage in HTTP-only cookies
- User logout

## Technologies Used

- Node.js
- Express.js
- MongoDB (with Mongoose)
- Passport.js
- jsonwebtoken
- bcrypt

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/your-username/your-project.git
   ```

2. Install dependencies:

   ```
   cd your-project
   npm install
   ```

3. Create a `.env` file in the project root and add the following variables:
   ```
   JWT_SECRET=your_very_secure_secret
   MONGODB_URI=your_mongodb_uri
   PORT=8080
   ```

## Usage

1. Start the server:

   ```
   npm start
   ```

2. The server will be running at `http://localhost:8080`

### Endpoints

- `POST /auth/register`: Register a new user
- `POST /auth/login`: Log in and return a JWT
- `GET /profile`: Protected route that requires authentication
- `GET /auth/logout`: Log out the user

## Passport Configuration

Passport configuration can be found in `config/passport.js`. It uses the JWT strategy to authenticate requests.

## Security

- JWT tokens are stored in HTTP-only cookies for enhanced security.
- Passwords are hashed before being stored in the database.
- Environment variables are used to store sensitive information.
