// require('dotenv').config(); // <-- This MUST be the first line
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Routes
// app.use('/api/auth', require('./routes/auth'));
// app.use('/api/projects', require('./routes/projects')); // <-- Yeh naya add kiya
// app.use('/api/tasks', require('./routes/tasks'));       // <-- Yeh naya add kiya

// // MongoDB Connection
// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log("MongoDB Connected Successfully!"))
//   .catch((err) => console.log("Database Connection Error: ", err));

// // Sample Route
// app.get('/', (req, res) => res.send('Project Management Tool API is running...'));

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));











require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// 1. CORS Configuration (Explicit Origins)
const corsOptions = {
  origin: [
    'https://mern-project-three-mu.vercel.app', // Aapka Vercel Frontend
    'http://localhost:5173',                   // Local Vite
    'http://localhost:3000'                    // Local React
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));
app.use(express.json());

// 2. Routes Setup
// Note: Agar frontend se request '/api/auth/signup' bhej rahe ho toh default '/api/auth' rakho
// Agar frontend se direct '/auth/signup' bhej rahe ho toh neeche '/auth' kar do.
app.use('/api/auth', require('./routes/auth'));
app.use('/api/projects', require('./routes/projects'));
app.use('/api/tasks', require('./routes/tasks'));

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected Successfully!"))
  .catch((err) => console.log("Database Connection Error: ", err));

// Sample Route
app.get('/', (req, res) => res.send('Project Management Tool API is running...'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));