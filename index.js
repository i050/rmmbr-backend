const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");


app.use(express.json());
app.use(cors());



const multer = require('multer');

// הגדרת מיקום לשמירת הקבצים המועלים
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'uploads/'); // תוכל לשנות את הנתיב למקום שבו תרצה
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});

// הגדרת משתנה עבור העלאת הקבצים והשימוש באחסון שהוגדר
const upload = multer({ storage: storage });

// מראש ניתן להציב את העבודה על הנתיב המתאים לה, לדוגמה:
app.post('/upload', upload.single('image'), (req, res) => {
  res.send('התמונה הועלתה בהצלחה');
});




// דף ראשי
app.get("/", (req, res) => {
  res.send("Welcome to the Memory Wall App!");
});

// רישום נתיבים לדפים נפרדים
app.use("/api", require("./memoryWallRoutes"));
app.use("/api", require("./userRoutes"));

// התחלת השרת
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

