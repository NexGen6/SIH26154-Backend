# SIH 2026 PS 154 Backend | NextGen6

Backend service for the **Smart India Hackathon (SIH) 2026** project by team **NextGen6**, built with **Node.js**, **Express**, and **MongoDB**.

Current Status: **Role-Based JWT Authentication & Authorization Implemented**

---

## Authentication & Authorization Flow

* **RBAC:** An `admin` middleware enforces privilege separation:
   * **Admin:** Can create and register Operator accounts.
   * **Operator:** Restricted from creating accounts; can log in.

---

## Getting Started

### Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/NexGen6/SIH26154-Backend.git
   cd SIH26154-Backend
   ```
2. **Install dependencies:** `npm install`
3. **Configure Environment Variables (.env):** Set `PORT`, `MONGO_URI`, and `JWT_SECRET`.

---

## Running the Server

* **Development:** `npm run dev`
* **Production:** `npm start`