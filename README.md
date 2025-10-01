# 🏦 Assingnment Backend

A simple backend API built using **Node.js** and **Express.js** for handling user authentication and task management.

---

## 🚀 Features

- **User Authentication**: Register and login users securely.
- **Task Management**: Create, read, update, and delete tasks.
- **Environment Configuration**: Use of `.env` for sensitive data.
- **Database Integration**: Connects to a MongoDB database.

---

## 🛠️ Technologies Used

- **Node.js**: JavaScript runtime for server-side development.
- **Express.js**: Web application framework for Node.js.
- **MongoDB**: NoSQL database for storing user and task data.
- **Mongoose**: ODM for MongoDB to model application data.
- **dotenv**: Module to load environment variables from a `.env` file.

---

---

## ⚙️ Installation & Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Shreya-tech-create/Assingnment_backend.git
   cd Assingnment_backend

2. Install dependencies:   
 npm install

3.Set up environment variables:

Create a .env file in the root directory and add the following:
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key

4.Start the server:
npm start

📡 API Endpoints
Authentication

POST /api/auth/register: Register a new user.

POST /api/auth/login: Login an existing user.

Tasks

GET /api/tasks: Get all tasks.

GET /api/tasks/:id: Get a task by ID.

POST /api/tasks: Create a new task.

PUT /api/tasks/:id: Update a task by ID.

DELETE /api/tasks/:id: Delete a task by ID.

🧪 Testing

To run tests, ensure you have set up the test environment variables in a .env.test file, then run:
npm install
npm test

📌 Notes

Ensure MongoDB is running and accessible via the URI provided in the .env file.

For production environments, consider using a more secure method for handling JWT secrets and database credentials.

👩‍💻 Author
Shreya Dubey
GitHub: https://github.com/Shreya-tech-create
Email: shreyadubey0803@gmail.com


📝 License

This project is licensed under the MIT License - see the LICENSE
 file for details.

---

## ✅ Steps to Add This README to Your Repo

1. **Create a `README.md` file** in the root directory of your `Assingnment_backend` repository.

2. **Copy and paste** the above template into the `README.md` file.

3. **Customize** the following sections as per your project specifics:
   - **MongoDB URI**: Replace `your_mongodb_connection_string` with your actual MongoDB connection string.
   - **JWT Secret**: Replace `your_jwt_secret_key` with your actual JWT secret key.
   - **Contact Email**: Replace `[your-email@example.com]` with your actual contact email.

4. **Commit and push** the changes to your GitHub repository:

   ```bash
   git add README.md
   git commit -m "Add README.md"
   git push origin main


## 📁 Project Structure

