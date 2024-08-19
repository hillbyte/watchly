# Watchly System Design Document

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Architecture Overview](#architecture-overview)
5. [Database Design](#database-design)
6. [API Endpoints](#api-endpoints)
7. [Authentication and Authorization](#authentication-and-authorization)
8. [Error Handling](#error-handling)
9. [Deployment](#deployment)
10. [Scalability and Performance](#scalability-and-performance)
11. [Security Considerations](#security-considerations)
12. [Challenges and Limitations](#challenges-and-limitations)
13. [Ongoing and Future Work](#ongoing-and-future-work)
14. [Conclusion](#conclusion)

## Introduction

Watchly is a video streaming platform where users can upload, watch, and manage videos. It includes user authentication, subscription management, and watch history tracking. This document provides an in-depth look at the engineering and architectural decisions behind Watchly.

## Features

- **User Authentication**: Register, Login, Logout, Password Reset.
- **Video Upload and Management**: Upload videos, manage video metadata, and delete videos.
- **User Profile Management**: Update profile information, manage avatars and cover images.
- **Subscription Management**: Subscribe to channels, manage subscriptions.
- **Watch History Tracking**: Track watched videos, continue watching from where left off.

## Technologies Used

- **Backend**: Node.js and Express.js for server-side logic.
- **Database**: MongoDB for data storage.
- **Authentication**: JWT (JSON Web Tokens) for secure authentication.
- **File Storage**: Cloudinary for storing video files and thumbnails.
- **Middleware**: Multer for handling file uploads, Cookie-Parser for managing cookies.
- **Environment Management**: dotenv for managing environment variables.

## Architecture Overview

The architecture follows the Model-View-Controller (MVC) pattern:

1. **Model**: Defines the data structure and business logic.
2. **Controller**: Contains business logic and interacts with models.
3. **Routes**: Maps API endpoints to controller functions.
4. **Middleware**: Handles authentication, file uploads, and error handling.

### High-Level Architecture Diagram

[Architecture Diagram](./public/diagram-export.png)
![[./public/diagram-export.png]]

```
Client <-> Express Server <-> MongoDB
```

### Detailed Architecture

1. **Client**: The frontend application, built with React.js, communicates with the backend via RESTful APIs.
2. **Express Server**: The backend server, built with Node.js and Express.js, handles API requests, processes business logic, and interacts with the database.
3. **MongoDB**: The database stores user data, video metadata, subscription information, and watch history.

## Database Design

### User Model

- **Fields**:
  - `username`: String, unique identifier for the user.
  - `email`: String, unique and validated.
  - `fullName`: String, user's full name.
  - `avatar`: String, URL to the user's avatar image.
  - `coverImage`: String, URL to the user's cover image.
  - `watchHistory`: Array of video IDs, tracks watched videos.
  - `password`: String, hashed password.
  - `refreshToken`: String, used for refreshing JWT tokens.

### Video Model

- **Fields**:
  - `videoFile`: String, URL to the video file.
  - `thumbnail`: String, URL to the video thumbnail.
  - `title`: String, title of the video.
  - `description`: String, description of the video.
  - `duration`: Number, length of the video in seconds.
  - `views`: Number, count of views.
  - `publicationStatus`: String, status of the video (public, private).
  - `owner`: ObjectId, reference to the user who uploaded the video.

### Subscription Model

- **Fields**:
  - `subscriber`: ObjectId, reference to the subscribing user.
  - `channel`: ObjectId, reference to the subscribed channel.

## API Endpoints

### User Routes

- **Register**: `POST /api/users/register`
  - Registers a new user.
  - Validates input data.
  - Hashes the password before saving.
- **Login**: `POST /api/users/login`
  - Authenticates a user.
  - Issues a JWT token upon successful authentication.
- **Logout**: `POST /api/users/logout`
  - Invalidates the user's session.
- **Profile Management**: `GET /api/users/profile`, `PUT /api/users/profile`
  - Retrieves and updates user profile information.
- **Watch History Tracking**: `GET /api/users/watch-history`, `POST /api/users/watch-history`
  - Retrieves and updates the user's watch history.

### Video Routes

- **Upload**: `POST /api/videos/upload`
  - Handles video file uploads.
  - Uses Multer middleware for file handling.
  - Stores video files on Cloudinary.
- **Retrieve**: `GET /api/videos/:id`
  - Retrieves video metadata and streaming URL.
- **Update**: `PUT /api/videos/:id`
  - Updates video metadata.
- **Delete**: `DELETE /api/videos/:id`
  - Deletes a video.

## Authentication and Authorization

- **JWT**: JSON Web Tokens are used to secure API endpoints.
  - Tokens are issued upon successful login.
  - Tokens are validated for each request to protected routes.
- **Middleware**: Custom middleware ensures routes are protected and accessible only to authenticated users.
  - `authMiddleware`: Validates JWT tokens.
  - `roleMiddleware`: Ensures users have the necessary permissions.

## Error Handling

- **Custom Error Handling**: Ensures consistent error responses across the application.
  - Centralized error handling middleware.
  - Custom error classes for different types of errors (e.g., `ValidationError`, `AuthenticationError`).
- **Logging**: Errors are logged for debugging and monitoring purposes.
  - Uses libraries like Winston for logging.

## Deployment

- **Environment Variables**: Managed using dotenv.
  - Sensitive information (e.g., database URI, JWT secret) is stored in environment variables.
- **Database**: MongoDB Atlas or Local MongoDB URI.
  - Connection strings are managed via environment variables.
- **File Storage**: Cloudinary.
  - Video files and thumbnails are stored on Cloudinary.
- **Server**: Deployed on platforms like Heroku, AWS, or DigitalOcean.
  - Continuous Integration/Continuous Deployment (CI/CD) pipelines for automated deployments.

## Scalability and Performance

- **Database Indexing**: Improves query performance.
  - Indexes on frequently queried fields (e.g., `username`, `email`, `video title`).
- **Caching**: Reduces load on the database.
  - Uses Redis for caching frequently accessed data.
- **Load Balancing**: Distributes traffic across multiple server instances.
  - Uses load balancers like Nginx or AWS Elastic Load Balancer.
- **Horizontal Scaling**: Adds more server instances to handle increased load.
  - Uses containerization (e.g., Docker) for easy scaling.

## Security Considerations

- **HTTPS**: Encrypts communications between the client and server.
  - Uses SSL/TLS certificates.
- **Data Validation**: Prevents SQL injection and other attacks.
  - Validates input data using libraries like Joi.
- **Rate Limiting**: Prevents API abuse.
  - Limits the number of requests per IP address.
- **Environment Variables**: Keeps sensitive information secure.
  - Uses dotenv to manage environment variables.

## Challenges and Limitations

- **Scalability**: Handling many users and video uploads.
  - Requires efficient load balancing and horizontal scaling.
- **Performance**: Optimizing video streaming and reducing latency.
  - Uses CDNs (Content Delivery Networks) for faster video delivery.
- **Security**: Protecting user data and preventing unauthorized access.
  - Regular security audits and updates.
- **Data Consistency**: Maintaining consistency across systems.
  - Uses transactions and consistency checks.
- **Cost Management**: Managing cloud storage and database costs.
  - Monitors usage and optimizes resource allocation.

## Ongoing and Future Work

- **Feature Enhancements**: Adding live streaming, video recommendations, and social sharing.
  - Researching and implementing new features based on user feedback.
- **Performance Optimization**: Continuously improving performance and scalability.
  - Regularly profiling and optimizing code.
- **Security Improvements**: Updating security measures regularly.
  - Keeping up with the latest security best practices.
- **User Experience**: Enhancing the interface based on feedback.
  - Conducting user testing and making iterative improvements.

## Conclusion

Watchly is a video streaming platform with a clear architecture and essential features. This document provides an in-depth overview of the project's structure, technologies, and design considerations. By following best practices in software engineering, Watchly aims to deliver a robust and scalable video streaming experience.
