# SIH 2026 PS 154 Backend | NextGen6

Backend service for the **Smart India Hackathon (SIH) 2026** project by team **NextGen6**, built with **Node.js**, **Express**, and **MongoDB**. 

**Current Status:** Authentication, Authorization, Advanced Submission Validation, Multer-based PDF Multimodal Extraction, Dynamic Prompt Engineering, and Gemini AI Integration Implemented.

## Key Features & Workflow

### 1. Authentication & Authorization (RBAC)

An admin middleware enforces strict privilege separation:
* **Admin:** Full access to system administration. Can create, manage, view and register Operator accounts.
* **Operator:** Access restricted to daily operational tasks. Restricted from creating accounts; can log in, execute operational tasks, and securely log out.

### 2. Submission & Output Validation

Ensures data integrity and compliance before records are processed or saved to the database:
* Validates incoming payload structures against required schemas using `express-validator`.
* Supports conditional input pipelines dynamically matching the chosen `sourceType` (Text or Document).
* Sanitizes input to prevent malformed data entry and formats generated output payloads.
* Rejects incomplete or invalid operator submissions with appropriate HTTP error codes.

### 3. Multimodal PDF Extraction & Gemini AI Prompt Engineering

Integrates Google's Gemini AI API alongside an advanced context-customization layer that seamlessly handles both raw text and complex multi-format document payloads:
* **PDF Document Parsing:** Utilizes Multer to ingest PDF documents securely in RAM as a Buffer, converting unstructured files into context-ready components without writing transient files to disk.
* **Custom Prompts:** Pass custom instructions directly to the model alongside data payloads or text extracted from documents.
* **Tone Control:** Tailor responses to specific styles (e.g., professional, casual, analytical, technical).
* **Target Audience Optimization:** Adjust the complexity and vocabulary of the output based on who will read it.
* **Localization & Language:** Generate outputs natively in multiple user-specified languages.

### 4. Audit Log System for Content Transformation AI Engine

A centralized, asynchronous Audit Log System designed to track, monitor, and record all data lifecycle stages, model inferences, and user interactions within the Content Transformation AI Engine. This system ensures full compliance, security monitoring, and debugging capabilities by capturing deterministic records of how content is transformed.

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
   GEMINI_API_KEY=YOUR_GEMINI_AI_API_KEY
   ```

### Running the Server

* **Development Mode (with hot-reloading):**
  ```bash
  npm run dev
  ```
* **Production Mode:**
  ```bash
  npm start
  ```