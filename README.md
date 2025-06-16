#  Authify – Full-Stack MERN Authentication App

**Authify** is a secure, full-stack authentication template built with the MERN stack. It offers a robust and modern foundation for user authentication, profile management, and protected routing in full-stack applications.

This project demonstrates secure login systems using JWT, Redux Toolkit, Firebase Storage, and cookie-based session management.



##  Tech Stack

- **Frontend**: React.js, Tailwind CSS, React Router DOM v6, Redux Toolkit
- **Backend**: Node.js, Express.js, MongoDB
- **Authentication**: JWT (JSON Web Token), HTTP-only Cookies
- **Image Upload**: Firebase Storage



##  Features

-  Email and password authentication
-  JWT-based session management (with HTTP-only cookies)
-  Redux Toolkit for global state handling
-  Protected profile route (client + server side)
-  Profile updates: username, email, password
-  Profile image upload using Firebase Storage (max size 2MB)
-  Account deletion functionality
-  Responsive and clean UI using Tailwind CSS


## How It Works

### User Registration & Login
- Users can sign up with their email and password.
- Upon successful login, the backend issues a JWT token and stores it in an HTTP-only cookie to protect against XSS attacks.

### Protected Routes
- Pages like the Profile Page are protected.
- If a user tries to access them without being authenticated (without a valid token), they are redirected to the Login page.

### Profile Management
Logged-in users can:
- Update their username, email, and password.
- Upload a profile picture (stored in Firebase Storage).
- The new profile image URL is saved in the backend and reflected across sessions.

### Authentication State
- The frontend uses Redux Toolkit to manage the global user state.
- Redux ensures the app knows the user is authenticated, even after refreshing the page.

### Session Persistence
- Since the token is stored in an HTTP-only cookie, users stay logged in across page reloads.
- The backend validates the cookie on all protected endpoints.

### Sign Out
- Clicking Sign Out clears the cookie on the backend, logging the user out securely.

### Delete Account
- Users can delete their account, which:
  - Removes their record from MongoDB.
  - Logs them out immediately.



