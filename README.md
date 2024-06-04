# Watchly

Watchly is a video streaming platform that allows users to upload, watch, and manage videos. It also includes features for user authentication, subscription management, and video watch history tracking.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)

## Features

- User Authentication (Register, Login, Logout)
- Video Upload and Management
- User Profile Management
- Subscription Management
- Watch History Tracking

## Technologies Used

- Node.js
- Express.js
- MongoDB with Mongoose
- Cloudinary for media storage
- JWT for authentication
- Multer for file uploads

## Project Structure

```
watchly/
├── controllers/
│   ├── user.controller.js
│   ├── video.controller.js
├── middlewares/
│   ├── auth.middleware.js
│   ├── multer.middleware.js
├── models/
│   ├── user.model.js
│   ├── video.model.js
│   ├── subscription.model.js
├── routes/
│   ├── user.route.js
│   ├── video.route.js
├── utils/
│   ├── ApiError.js
│   ├── ApiResponse.js
│   ├── asyncHandler.js
│   ├── cloudinary.js
├── .env
├── app.js
├── index.js
├── package.json
```

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- MongoDB Atlas DB URI or Local MongoDB URI
- Cloudinary Account

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/hillbyte/watchly.git
   cd watchly
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and add the following variables:

   ```env
   PORT=8000
   DB_URI=mongodb://localhost:27017
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   ACCESS_TOKEN_SECRET=your_access_token_secret
   ACCESS_TOKEN_EXPIRY=1h
   REFRESH_TOKEN_SECRET=your_refresh_token_secret
   REFRESH_TOKEN_EXPIRY=7d
   CLIENT_URL=http://localhost:3000
   ```

4. **Run the server:**

   ```bash
   npm run dev
   ```

   The server should now be running on `http://localhost:8000`.

## API Endpoints

[<img src="https://run.pstmn.io/button.svg" alt="Run In Postman" style="width: 128px; height: 32px;">](https://app.getpostman.com/run-collection/11511734-94802280-bd54-4442-8ad8-e152f11b0862?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D11511734-94802280-bd54-4442-8ad8-e152f11b0862%26entityType%3Dcollection%26workspaceId%3D46f6d0c5-1458-407d-be2b-708a3de357af)

`API's Still Under Development`

---
