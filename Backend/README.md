# HireLogix-Backend

HireLogix is a web application built with Node.js, Express, and MySQL, utilizing the Prisma ORM for database interactions. It serves as an Applicant Tracking System where recruiters can post jobs and job seekers can browse and apply for them.

## API Demo
Extensive documentation with examples [here](https://documenter.getpostman.com/view/21091542/2s9YR57uum)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed.
- MySQL database set up and running.
- Prisma client configured with your database connection details.
- Create a `.env` file based on `.env.example` and configure your environment variables.

## Installation


1. Install dependencies:

   ```bash
   npm install
   ```

2. Run database migrations:

   ```bash
   npx prisma migrate dev
   ```

3. Start the application:

   ```bash
   npm run dev
   ```

4. Access the application at `http://localhost:7000`.


## Environment Variables

- **PORT:** The port on which the server will run.
- **DATABASE_URL:** URL for connecting to the MySQL database.
- **JWT_SECRET:** Secret key for JWT token generation.

