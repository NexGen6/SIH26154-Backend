# SIH 2026 PS 154 Backend | NextGen6

Backend service for the **Smart India Hackathon (SIH) 2026** project by team **NextGen6**, built with **Node.js**, **Express**, and **MongoDB**.

**Current Status:** Authentication, Authorization & Submission Validation Implemented

## Key Features & Workflow

### 1. Authentication & Authorization (RBAC)
An admin middleware enforces strict privilege separation:
* **Admin:** Full access to system administration. Can create, manage, and register Operator accounts.
* **Operator:** Access restricted to daily operational tasks. Restricted from creating accounts; can log in and log out.

### 2. Submission Validation
Ensures data integrity and compliance before records are saved to the database:
* Validates incoming payload structures against required schemas.
* Sanitizes input to prevent malformed data entry.
* Rejects incomplete or invalid operator submissions with appropriate HTTP error codes.

---

## Getting Started

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

3. **Configure Environment Variables (.env):**
   Create a `.env` file in the root directory and define the following variables:
   ```env
   PORT=YOUR_PORT_NUMBER
   MONGO_URI=YOUR_MONGODB_CONNECTION_STRING
   JWT_SECRET=YOUR_JWT_SECRET_KEY
   ```

---

## Running the Server

* **Development Mode (with hot-reloading):**
  ```bash
  npm run dev
  ```
* **Production Mode:**
  ```bash
  npm start
  ```
