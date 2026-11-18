# Backend Development Tasks

A practical backend development repository built with Node.js, Express.js, and MongoDB. This project demonstrates REST API development and CRUD operations using Mongoose.

## Features

- Create new notes
- Retrieve all notes
- Update existing note descriptions
- Delete notes using their unique IDs
- MongoDB database integration
- RESTful API implementation
- Environment variable configuration

## Technologies

- **Node.js** – JavaScript runtime
- **Express.js** – Backend framework
- **MongoDB** – NoSQL database
- **Mongoose** – MongoDB object modeling
- **Dotenv** – Environment variable management

##  Project Structure

```text
backend-development-tasks/
│
├── src/
│   ├── db/
│   │   └── db.js
│   │
│   ├── models/
│   │   └── note.model.js
│   │
│   └── app.js
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

##  Installation & Setup

### 1. Clone Repository

```bash
git clone https://github.com/muhammad-alidev55/backend-development-tasks.git
```

### 2. Navigate to Project

```bash
cd backend-development-tasks
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the root directory:

```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
```

Never upload your `.env` file to GitHub.

### 5. Start the Server

```bash
node server.js
```

Server runs at:

```text
http://localhost:3000
```

## API Documentation

### Create Note

**POST** `/notes`

Request Body:

```json
{
  "title": "Backend Development",
  "description": "Learning Node.js and Express.js"
}
```

### Get All Notes

**GET** `/notes`

Returns all notes stored in the database.

### Update Note

**PATCH** `/notes/:id`

Request Body:

```json
{
  "description": "Updated description"
}
```

### Delete Note

**DELETE** `/notes/:id`

Replace `:id` with the MongoDB document ID.

## Database Model

The Note collection contains:

| Field | Type |
|---|---|
| title | String |
| description | String |
| _id | ObjectId (automatically generated) |

## API Testing

You can test the API using:

- Postman
- Thunder Client

## Learning Objectives

- Understanding backend development
- Building RESTful APIs
- Implementing CRUD operations
- Connecting MongoDB with Node.js
- Working with Express.js
- Understanding Mongoose schemas and models

## Author

**Muhammad Ali**

GitHub: [muhammad-alidev55](https://github.com/muhammad-alidev55)

---

⭐ If you find this project useful, consider giving it a star.
