# Banking Project - Account Creation and Transaction Verification

## Overview

This is a full-stack banking project that allows users to:
- **Create bank accounts** with name, account type, limit, and fingerprint data.
- **Verify users** for transactions using a unique code and fingerprint authentication.

Data is stored in a **MongoDB database** and encrypted using **bcrypt** for fingerprint security.

## Features
- Account creation form with fingerprint scanning
- Transaction verification with unique account codes and fingerprint matching
- MongoDB for data storage (including encrypted fingerprint data)

## Prerequisites

- Node.js (v14 or higher)
- MongoDB and MongoDB Compass


Install dependencies:

sh
Copy
Edit
cd banking-project
npm install
Set up MongoDB:

Install and run MongoDB Compass locally.
Create a new database called bankingDB.
Set environment variables:

Copy .env.example to .env and update the MongoDB connection string (if needed).
Run the server:

sh
Copy
Edit
node server/server.js
Open the frontend HTML files in your browser:

index1.html for account creation.
index2.html for transaction verification.