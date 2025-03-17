# Memory App Backend

## 📌 Overview
**Memory App Backend** is the backend service for the **Memory App**, where users can **create, update, and share memories with images**. Other users can view public memories. The application supports **user authentication, image uploads, and CRUD operations**.  

This backend is built using **Node.js, Express.js, and MongoDB** and is hosted on **Render (free hosting service).**  

## 🎯 Features
- ✅ **User Authentication (Sign Up, Login, Logout)**
- 📝 **Create, Read, Update, and Delete (CRUD) memories**
- 📸 **Image Upload Support**
- 🔍 **View Other Users' Memories**
- 🔐 **Secure Authentication using JWT**
- 🚀 **Hosted on Render**

## 🛠️ Technologies Used
- **Node.js & Express.js** (for server & API)  
- **MongoDB Atlas & Mongoose** (for database & schema modeling)  
- **Multer (for file uploads)** (User can upload images)  
- **JWT Authentication** (for user sessions)  
- **Render** (for backend hosting)  

## 🌐 Live API URL
Backend is hosted on **Render**:  
🔗 [Memory App API](https://memories-save.onrender.com)

## 📂 Folder Structure
```
memory-app-backend/
│── config/         # Configuration files (database, environment variables)
│── controllers/    # Business logic for API endpoints
│── helper/         # Utility functions
│── images/         # Stored uploaded images initially then send to cloudinary
│── middleware/     # Authentication, file upload, error handling, etc.
│── models/         # Mongoose schemas (User, Memory)
│── routes/         # API route handlers
│── index.js        # Main entry point
│── .env            # Environment variables (not included in repo)
│── package.json    # Project dependencies
│── README.md       # Project documentation
```

## 🚀 How to Run Locally
1. Clone the repository:
   ```sh
   git clone https://github.com/abdullah116632/memory-app-backend.git
   ```
2. Navigate to the project folder:
   ```sh
   cd memory-app-backend
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Add a `.env` file and configure:
   ```
   MONGO_URI=your-mongodb-atlas-url
   JWT_SECRET=your-secret-key
   CLOUDINARY_API_KEY=your-cloudinary-key
   CLOUDINARY_SECRET=your-cloudinary-secret
   ```
5. Start the server:
   ```sh
   npm start
   ```
6. API will be available at `http://localhost:4000/`.

## 🔥 API Endpoints
Since all routes are prefixed with `/posts` in `index.js`, the full API endpoints are:

| Method | Endpoint             | Description                 |
|--------|---------------------|-----------------------------|
| GET    | `/posts`            | Get all posts (memories)    |
| POST   | `/posts`            | Create a new post (with an image) |
| PATCH  | `/posts/:id`        | Update an existing post (with an image) |
| DELETE | `/posts/:id`        | Delete a post               |
| PATCH  | `/posts/likePost/:id` | Like a post                |

## 📌 Future Improvements
- 📢 **Add comments & likes feature for memories**  
- 🔄 **Optimize performance & caching**  
- 📊 **Analytics for memory views & user activity**  

## 📜 License
This project is open-source and can be modified for learning purposes.
