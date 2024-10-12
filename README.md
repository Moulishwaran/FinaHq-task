Step 1: 

# Forex Rate Scraper and API

## Overview

This project scrapes forex conversion rates from a website, stores the rates in a MySQL database, and provides APIs to retrieve average and closing rates for currency pairs over specified time periods.

## Features
- Scrapes daily forex conversion rates
- Stores historical forex data in a MySQL database
- Provides RESTful APIs to retrieve:
  - Average conversion rate for a given period
  - Closing conversion rate for a specific date
  - Add a new currency pair for tracking (optional)

## Prerequisites

- Node.js (v14 or above)
- MySQL (locally or on a cloud platform)
- Postman (optional, for testing)

## Project Setup

### Step 1: Clone the repository
```bash
git clone https://github.com/yourusername/forex-rate-scraper.git
cd forex-rate-scraper

Step 2: Install dependencies
npm install

Step 3: Configure the database
Ensure that MySQL is running on your machine.
Run the provided SQL script to set up the database schema:

mysql -u root -p < scripts/dbSetup.sql
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=root12345
DB_NAME=forex_db

Step 4: Run the application
npm start


API Endpoints

### 5. **Postman Collection**

You can create a Postman collection with the following endpoints:
- `GET /api/forex/average-rate`
- `GET /api/forex/closing-rate`
- `POST /api/forex/add-pair`

Export the collection and include it as `postman_collection.json` in your repository. Users can import it into Postman for easy API testing.

To export a collection in Postman:
1. Click the ellipsis `...` next to your collection.
2. Select **Export**.
3. Choose **Collection v2.1** and export the file as `postman_collection.json`.

---

By including these elements, your repository will have all the necessary files and clear instructions to help anyone set up and run the Forex Rate Scraper and API project successfully.














