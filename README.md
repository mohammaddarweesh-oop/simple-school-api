# Simple School API

Welcome to the Simple School API, a backend API built with Node.js, Express, and MongoDB to manage a school system. This API supports user registration, login, subject assignment, and administrator controls, among other features.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup and Installation](#setup-and-installation)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [License](#license)
- [Contact](#contact)

## Features

- **User Authentication**: Register and login functionality with JWT tokens.
- **Admin Controls**: Admins can manage user accounts and subjects.
- **Subject Management**: Assign, edit, and retrieve subjects for students.
- **Security**: JWT for authentication and secure password hashing.

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Token)
- **ORM**: Mongoose

## Setup and Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/mohammaddarweesh-oop/simple-school-api.git
   ```

2. Navigate to the project directory:
   ```bash
   cd simple-school-api
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Set up your environment variables (see the [Environment Variables](#environment-variables) section).

5. Start the server:
   ```bash
   npm start
   ```

   The API will be running on `http://localhost:5000`.

## Environment Variables

Create a `.env` file in the root directory and add the following variables:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

- `MONGO_URI`: Your MongoDB connection string.
- `JWT_SECRET`: A secret key for JWT token generation.
- `PORT`: Port number to run the API (default is 5000).

## API Endpoints

Here is a summary of the main API endpoints:

### User Endpoints

- **POST** `/api/register` - Register a new user
- **POST** `/api/login` - Login and receive a token
- **GET** `/api/users/:userId` - Get user details (admin only)

### Subject Endpoints

- **POST** `/api/subjects` - Create a new subject (admin only)
- **PUT** `/api/subjects/:subjectId` - Edit a subject (admin only)
- **GET** `/api/subjects` - Retrieve all subjects
- **GET** `/api/subjects/:userId` - Get all subjects assigned to a specific user
- **POST** `/api/assign-subject` - Assign a subject to a student (admin only)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

- **Email**: [engmohammaddarweesh@gmail.com](mailto:engmohammaddarweesh@gmail.com)
- **GitHub**: [mohammaddarweesh-oop](https://github.com/mohammaddarweesh-oop)
- **LinkedIn**: [Mohammad Darweesh](https://www.linkedin.com/in/mohammad-darweesh-175333202/)
