# Ticket Management Application

## Overview

The Ticket Management Application is a comprehensive solution designed for ACME Sales and Repairs to efficiently handle customer requests, manage ticket workflows, and streamline team collaboration. The system encompasses a variety of features catering to call center employees, engineers, supervisors, and administrators.

## Features and Highlights

### 1. Ticket Creation and Management

- Call center employees can create new tickets for both new connections and repairs.
- Duplicate ticket prevention ensures only one active ticket per customer's phone number.
- Detailed work updates and statuses are tracked for each ticket.

### 2. Search and Work Updates

- Call center employees have the ability to search for tickets based on various criteria.
- Real-time work updates, including date and time stamps, provide a comprehensive view of ticket progress.

### 3. Ticket Closure

- Exclusive ticket closure rights for call center employees, facilitating customer communication for ticket resolution.
- Dedicated view for call center employees to manage and close open tickets.

### 4. Engineer and Team Management

- Engineers are assigned to teams, initially belonging to a free pool team.
- Supervisors manage teams, ensuring efficient distribution of tickets among engineers.
- Admins have granular control over team creation, modification, and deletion.

### 5. Admin Functionality

- Admins oversee the entire system, with the authority to manage teams, engineers, and supervisors.
- Flexibility for admins to reassign resources and configure system parameters.

### 6. Ticket Assignment and Status Updates

- Engineers handle a specified number of tickets daily, with the ability to reject one ticket per day.
- Status updates include "Accepted," "Rejected," "On the way," "Work in progress," and "Completed."

### 7. Supervisor Features

- Supervisors have access to tools for efficient ticket management within their teams.
- Search functionality for tickets based on mobile number, name, or ticket number.
- View of engineers under their supervision, with filters for work status.

## Architecture and Implementation

The application follows a three-tier architecture:

- **Frontend:** Developed using Angular, offering a responsive and intuitive user interface.
- **Backend:** Powered by Node.js and Express, providing robust server-side functionality.
- **Database:** MongoDB is employed for efficient data storage and retrieval.

## Security Measures

- **Authentication:** Implemented using JSON Web Tokens (JWT) to ensure secure access based on user roles.
- **Password Security:** Passwords are hashed and dehashed to prevent unauthorized access and ensure data integrity.

## Getting Started

1. **Installation:**
   - Clone the repository: `git clone https://github.com/kumar-deep-dhar/mean-ticket-management-application.git`
   - Navigate to the project directory: `cd ticket-management-application`

2. **Setting Up:**
   - Install dependencies for the frontend and backend:
     - Frontend: `cd frontend && npm install`
     - Backend: `cd backend && npm install`

3. **Running the Application:**
   - Start the frontend and backend servers:
     - Frontend: `cd frontend && ng serve`
     - Backend: `cd backend && npm start`

4. **Access the Application:**
   - Open your web browser and go to `http://localhost:4200/` to access the application.

## Technologies Used

- **Frontend:** Angular
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Authentication:** JSON Web Tokens (JWT)


## Authentication

### User Registration:

- **Endpoint:** `/api/signup`
- **Method:** `POST`
- **Description:** Allows users to register by providing necessary details.

#### Flow:

1. The client sends a registration request to the server.
2. The server hashes the password and stores user details in the database.

### User Login:

- **Endpoint:** `/api/login`
- **Method:** `POST`
- **Description:** Allows users to log in and receive a JWT for authentication.

#### Flow:

1. The client sends a login request with user credentials.
2. The server validates credentials and issues a JWT.
3. The client stores the JWT for subsequent authenticated requests.

### Authenticated Requests:

- **Description:** All subsequent requests requiring authentication should include the JWT in the headers.

#### Flow:

1. The client includes the JWT in request headers.
2. The server verifies the JWT, extracts user information, and proceeds accordingly.

### Role-Based Authorization:

- **Description:** Certain routes or endpoints may have role-based access control.

#### Flow:

1. The server checks the user's role embedded in the JWT.
2. Access is granted or denied based on the user's role.



## Pages

### Signup Page
![signup](https://github.com/kumar-deep-dhar/mean-ticket-management-application/assets/68948695/bd66f1e4-2fbc-4a48-9132-c0d0e425e390)

### Login Page
![login](https://github.com/kumar-deep-dhar/mean-ticket-management-application/assets/68948695/cca35874-ac37-41b8-b227-411dad0de524)

### Landing Page
![landingpage](https://github.com/kumar-deep-dhar/mean-ticket-management-application/assets/68948695/3f4f78c0-2c0c-4ff9-b6e1-610a19a0d725)

### Admin Dashboard
![adminlandingpage](https://github.com/kumar-deep-dhar/mean-ticket-management-application/assets/68948695/e42f1770-c6a4-4c60-81b1-e0f155a55b03)

#### Create Team
![createteam](https://github.com/kumar-deep-dhar/mean-ticket-management-application/assets/68948695/6d17706f-ce82-4694-b7ba-e5e587712f9c)

### Call Center Dashboard
![callcenterdashboard](https://github.com/kumar-deep-dhar/mean-ticket-management-application/assets/68948695/a8c838f9-6eac-4b0e-a722-393c423cb27a)

#### Create Ticket
![createticket](https://github.com/kumar-deep-dhar/mean-ticket-management-application/assets/68948695/0fde57c9-6910-4e1e-87b4-0036e7cc2b94)

#### Active Tickets List
![activetickets](https://github.com/kumar-deep-dhar/mean-ticket-management-application/assets/68948695/69fbcfbe-5d61-40d8-badc-f9b70c722485)

#### Ticket List After Closing One Ticket
![afterclosingoneticket](https://github.com/kumar-deep-dhar/mean-ticket-management-application/assets/68948695/663aee2e-9d46-40ff-9937-13b176605161)


## Contributors

- [Kumar Deep Dhar]

## License

This project is licensed under the [License Name] - see the [LICENSE.md](LICENSE.md) file for details.

---

Feel free to enhance this README file based on specific project details, contributing guidelines, or any other relevant information.
