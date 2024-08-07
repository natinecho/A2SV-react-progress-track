Here's a README with added information about authentication via Google and database integration:

---
![alt text](<Screenshot 2024-08-07 141014.png>) 
![alt text](<Screenshot 2024-08-07 140923.png>) 
![alt text](<Screenshot 2024-08-07 140943.png>) 
![alt text](<Screenshot 2024-08-07 141145.png>)
# Job Listing Application


Welcome to the Job Listing Application! This project is designed to provide users with a comprehensive list of job opportunities, including detailed views of job descriptions, responsibilities, and ideal candidate traits. The application leverages both Google and database authentication for user management.

![Job Listing Application Screenshot](<Screenshot 2024-08-05 093540.png>)

## Features

- List of job postings
- Detailed job description view
- Job responsibilities and ideal candidate traits
- Job location and timing details
- Dynamic job count update
- User authentication via Google and database

## Technologies Used

- React
- Next.js
- TypeScript
- Tailwind CSS
- Node.js
- JSON for job data storage
- NextAuth.js for authentication

## Authentication

The application supports user authentication through:

- **Google Sign-In**: Allows users to sign in using their Google accounts.
- **Database Authentication**: Users can also log in using credentials stored in the application's database.

### Authentication Setup

1. **Google Authentication**:
   - Integrated using NextAuth.js with GoogleProvider.
   - Ensure to set up your Google API credentials and add them to your environment variables.

2. **Database Authentication**:
   - Implemented using NextAuth.js with CredentialsProvider.
   - Ensure the backend service is set up to handle authentication requests and store user credentials securely.

## Usage

Once the application is running, you can:

- **Authenticate**: Use Google Sign-In or login with database credentials.
- **View Job Listings**: Access the main page to see a list of job postings.
- **View Job Details**: Click on any job to view detailed information, including descriptions, responsibilities, ideal candidate traits, and location/timing details.


### Components

- **JobCard**: Displays a brief overview of each job.
- **JobDetail**: Shows detailed information about a selected job.
- **JobList**: Fetches and displays the list of jobs.
- **About**: Displays additional information about the job.

### Pages

- **index.tsx**: The main page that renders the job list.
