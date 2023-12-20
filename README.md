# Ticket Management Application

## Requirement List for a new software

ACME Sales and Repairs want to implement a ticket resolving system. A Ticket can be either a new connection or repair an existing connection.

A user calls the call-center to raise a ticket. The ticket is then assigned to backend engineers by their supervisor. Engineers can update the status of the ticket like Accepted, On the way, work in progress, rejected, completed etc. Once completed or rejected, the ticket is removed from engineer's queue.

## Work Flow

1) A call center employee will be the one to create the tickets. Data collected will be Name, address with pin, mobile number and email.
2) A ticket can be of only be of two flavor, New or Repair.
3) There cannot be 2 Tickets with the same phone number. If the same customer calls, the old ticket has to be closed and then only new one can be created.
4) Call center guy should have facility to search for ticket by Name, mobile number, email or ticket number.
5) If a ticket is found, it should have the work update along with date and time.
6) System should not allow additional ticket on the same mobile number, if the existing one is not closed.
7) Only a call-center guy can close the ticket, by calling the customer on their mobile number.
8) Call-center guy should have facility to see the tickets which are not yet closed.
Every engineer should belong to a team, headed by a supervisor.
9) New joinee engineers belong to free pool team.
10) Supervisor can see the list of engineers assigned to him. He cannot rename , modify or delete a team.
11) Supervisor can assign non-closed or rejected tickets to engineers. He should have a facility to see available tickets.
Supervisor should have facility to filter the tickets to see the open, non-closed tickets. Closed tickets may not be shown.
12) Admin is the person who can create, rename, delete or modify a Team.
13) Admin can shuffle the engineers, supervisors from one team to another.
14) Admin should have facility to see engineers (assigned/unassigned), team details etc. He should be able to filter the list.
15) Engineers can have 5 tickets in a queue in a day. They can reject one ticket per day. This has to be configurable by admin.
16) Engineers should be able to update the status of the ticket to Accepted, Rejected, On the way, work in progress and completed.
17) Supervisor should be able to search a ticket by Mobile number, Name, ticket number.
18) Supervisor should be able to see all the engineers under his team and filter by engineer or work status.
19) Supervisor should not see the other teams. He can search a ticket that belongs to other teams.

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
