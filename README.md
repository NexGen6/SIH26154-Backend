# SIH 2026 PS 154 Backend | NextGen6

This repository contains the backend service for our **Smart India Hackathon (SIH) 2026** project, developed by team **NextGen6**. The backend is built using **Node.js**, **Express**, and **MongoDB**, designed to provide scalable, secure, and efficient API endpoints for our solution.

Current Status: **Express Server, Database Connectivity, and JWT Authentication Implemented**

---

## Tech Stack

* **Runtime:** Node.js (v16+)
* **Framework:** Express.js
* **Database:** MongoDB (using Mongoose ODM)
* **Authentication:** JSON Web Tokens (JWT) & bcryptjs (for password hashing)
* **Language:** JavaScript (ES6+)

---

## Authentication Flow

We have implemented a secure, token-based authentication mechanism to protect sensitive API routes:
1. **User Registration & Login:** User passwords are encrypted using `bcryptjs` before storing them in the MongoDB database.
2. **Token Generation:** Upon successful authentication, the server generates a unique **JSON Web Token (JWT)**.
3. **Route Protection:** Secure endpoints require this JWT to be passed in the incoming request header as a `Bearer Token`. An authentication middleware decodes and verifies the token before granting access.

---

## Getting Started

Follow these steps to set up and run the backend server locally on your machine.

### Prerequisites

Make sure you have the following installed:
* [Node.js](https://nodejs.org) (v16+ recommended)
* [MongoDB Community Server](https://mongodb.com) (for a local database) OR a MongoDB Atlas cloud account

### Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/NexGen6/SIH26154-Backend.git 
   cd SIH26154-Backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a file named `.env` in the root directory of the project and paste the following keys:
   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/sih_nextgen6
   JWT_SECRET=your_super_secret_jwt_key_here
   ```
   *(Note: Remember to replace `your_super_secret_jwt_key_here` with a strong, unique secret string).*

---

## Running the Server

* **Development Mode (with auto-reload using nodemon):**
  ```bash
  npm run dev
  ```

* **Production Mode:**
  ```bash
  npm start
  ```

Once started, the server will run at `http://localhost:5000` (or your configured `PORT`) and will establish a connection to your MongoDB instance automatically.