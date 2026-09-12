# SIH 2026 PS 154 Backend | NexGen6

The backend engine for the **Smart India Hackathon (SIH) 2026** (Problem Statement 154), built by team **NexGen6**. 

This system handles secure, high-throughput, multimodal content transformation using Node.js, Express, MongoDB, and Google Gemini AI.

---

## Key Features & Capabilities

### 1. Engine Security, Validation & Error Management
Advanced control layers built to harden engine prompts, validate ingestion structures, and gracefully catch system failures.
*   **File Output Type Limiting:** Enforces strict compliance checks on generation output targets, ensuring files are constrained strictly to authorized formats.
*   **Deep Request Validation:** Intercepts incoming client payloads via structured validation schemas to neutralize malformed data before pipeline execution.
*   **Prompt Hardening Architecture:** Wraps AI orchestrations in robust defensive prompt schemas designed to block adversarial prompt injections and maintain execution alignment.
*   **Global Error Handling Layer:** Captures unexpected application exceptions through a centralized middleware.

### 2. Authentication & Enterprise-Grade Authorization (RBAC)
Secure, session-less identity verification layout built to defend administrative control points.
*   **JWT & Cookie Security:** Implements JWT-driven authorization packaged inside secure, cross-site scripting (XSS) resistant HTTP-only cookies.
*   **Session Verification:** Features a `/me` contextual lifecycle endpoint to instantly validate client-side login persistence.
*   **Role-Based Privilege Separation:**
    *   **Admin:** Full-tier system access, exclusive right to trigger user account creation, and complete administrative lifecycle management over all roles.
    *   **Operator:** Constrained permissions optimized for standard data pipelines and execution actions. Strictly banned from account registration operations.

### 3. Multi-Format Input & Ingestion Pipeline
A robust ingestion engine that decouples unstructured asset processing from server memory limits.
*   **Structured Text & Document Parsing:** Native processing tracks for direct text payloads alongside deep structural extractors for `.pdf` and `.docx` assets.
*   **Direct Multimodal Vision Ingestion:** Intercepts `.png`, `.jpeg`, and `.webp` binaries via automated edge filters. Passes raw image matrices straight to Gemini's native vision model, avoiding rigid, text-only external OCR wrappers.
*   **Unified Pipeline Harmonization:** Normalises data matrices across disparate media types into a uniform context schema before prompting the core engine.

### 4. Asynchronous Submission & State Management
Fault-tolerant processing workflow designed to handle high-frequency concurrent operations without data dropping.
*   **Stateful Lifecycle Machine:** Automatically routes submitted objects across predictable transactional status phases: `Pending` ➔ `Processing` ➔ `Completed` / `Failed`.
*   **One-to-Many Asset Multiplicity:** Allows a singular, raw source submission to trigger and spawn a massive range of independent transformation operations simultaneously.
*   **Historical Retrieval Traces:** Persists deep contextual history trails, granting active users quick access to their past submission pipelines.

### 5. Context-Driven Gemini AI Transformation Engine
Advanced framework layout that wraps system inputs in user-tailored instructions.
*   **Multi-Artifact Asset Spawning:** Leverages native prompt engineering strategies to split one multi-modal context cluster into several distinct target files.
*   **Granular Context Matrixing:** Injects real-time customizable matrices directly inside the system prompt:
    *   **Target Audience:** Scales complexity curves from public summaries up to technical reviews.
    *   **Stylistic Tone:** Controls output voice settings (e.g., casual, technical, corporate).
    *   **Language Localization:** Translates and structures generation natively across different target regions.
    *   **Detail Level & Core Objective:** Manages content length density alongside core functional milestones.

### 6. Asynchronous Audit Logging & Storage Layout
Strict, real-time logging infrastructure keeping transparent records of system events.
*   **Immutable Lifespan Audit:** Non-blocking tracking layers record structural system events, security check steps, and model behaviors immediately.
*   **Privileged Dashboard Access:** Grants root Admins end-to-end trace views over operational patterns for performance auditing and debug actions.
*   **Linked Mongo Data Fabric:** Maps generated outputs directly back to source documents within the DB, facilitating fast querying of individual user submission histories.

---

## Tech Stack

*   **Runtime Environment:** Node.js
*   **Application Framework:** Express.js
*   **Database Management:** MongoDB (Mongoose ODM)
*   **Intelligence Orchestration:** Google Gemini AI API SDK
*   **File Processing Core:** Multer Engine & File-Specific Structural Parsers


## Getting Started

### Installation & Setup

1. **Clone the repository and install dependencies:**
   ```bash
   git clone https://github.com
   cd SIH26154-Backend
   npm install
   ```

2. **Configure Environment Variables (`.env`):**  
   Create a `.env` file in the root directory and define the following variables required by the engine:
   *   `PORT` — The network port for the Express application server.
   *   `MONGO_URI` — Connection string for your MongoDB database instances.
   *   `JWT_SECRET` — Secure key signature utilized for enterprise RBAC session verification.
   *   `GEMINI_API_KEY` — API key credential granting access to the Google Gemini AI orchestrator.

---

###  Running the Server

Execute the pipeline in your environment using the appropriate script configurations:

*   **Development Mode (with hot-reloading):**
    ```bash
    npm run dev
    ```
*   **Production Deployment:**
    ```bash
    npm start
    ```
