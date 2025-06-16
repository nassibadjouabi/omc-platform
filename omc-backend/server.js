const express = require('express');
const low = require('lowdb');
const cors = require('cors');
const FileSync = require('lowdb/adapters/FileSync');
const { v4: uuidv4 } = require('uuid');

// Configure Express
const app = express();
const PORT = process.env.PORT || 5001;

// Enable CORS
app.use(cors());

// Configure lowdb
const adapter = new FileSync('db.json');
const db = low(adapter);

// Initialize database with sample data if empty
const defaultData = {
  timer: {
    days: 12,
    hours: 45,
    minutes: 20
  },
  challenges: [
    {
      "title": "Web Development Challenge",
      "description": "Create a responsive website for Plato restaurant.",
      "requirements": [
        {
          "title": "Logo Design Challenge",
          "description": "Create a logo for Plato."
        }
      ],
      "deliverables": [
        "PNG file of the logo",
        "Social media posts"
      ]
    },
    {
      "title": "AI Challenge",
      "description": "Create a promotional video for Pista restaurant.",
      "requirements": [
        {
          "title": "Logo Design Challenge",
          "description": "Design a logo for Pista."
        }
      ],
      "deliverables": [
        "High-res PNG logo",
        "Video link"
      ]
    }
  ]
};

// Initialize with default data
db.defaults(defaultData).write();

// Middleware for parsing JSON
app.use(express.json());

// GET route to return both timer and challenges
app.get('/api/challenges', (req, res) => {
  // Log what we're sending for debugging
  console.log('Sending data:', db.value());
  res.json(db.value());
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log('Current database state:', db.value());
});