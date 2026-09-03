# SIH 2026 PS 154 Backend | [ NextGen6 ]

This repository contains the backend service for our **Smart India Hackathon (SIH) 2026** project. The backend is built using **Node.js**, **Express** and **MongoDB**, designed to provide scalable, secure, and efficient API endpoints for our solution.

Current Status: **Express Server & Database Connectivity Implemented**

## Tech Stack

* **Runtime:** Node.js
* **Framework:** Express.js
* **Database:** MongoDB (using Mongoose)
* **Language:** JavaScript (ES6+)

---

## Getting Started

Follow these steps to set up and run the backend server locally.

### Prerequisites

Make sure you have the following installed on your machine:
* [Node.js](https://nodejs.org) (v16+ recommended)
* [MongoDB Community Server](https://mongodb.com) (for local database) OR a MongoDB Atlas cloud account

### Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com
   cd SIH26154-Backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a file named `.env` in the root directory of the project and paste the following keys into it :
   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/sih_nextgen6
   ```

### Running the Server

* **Development Mode (with auto-reload):**
  ```bash
  npm run dev
  ```

* **Production Mode:**
  ```bash
  npm start
  ```

Once started, the server will be running at `http://localhost:5000` (or your configured PORT) and will establish a connection to your MongoDB instance automatically.