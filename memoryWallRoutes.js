const express = require("express");
const router = express.Router();
const { memoryWall } = require("./DB");
const multer = require("multer");
const e = require("express");

    
//get memoryWall
router.get("/memoryWall", (req, res) => {
  res.json(memoryWall);
});

//get memoryWll by id
router.get("/memoryWall/:id", (req, res) => {
  const memoryWallData = memoryWall.find((m) => m.id === req.params.id);
  res.json(memoryWallData);
});

//post memoryWall
router.post("/memoryWall", (req, res) => {
  memoryWall.push(req.body);
  res.json(memoryWall);
});



//get title
router.get("/getMemoryWallById/:id/title", (req, res) => {
  const memoryWallData = memoryWall.find((m) => m.id === req.params.id);
  res.json(memoryWallData.title);
});
//put title
router.put("/getMemoryWallById/:id/title", (req, res) => {
  const memoryWallData = memoryWall.find((m) => m.id === req.params.id);
  memoryWallData.title = req.body.title;
  console.log(memoryWallData.title);

  res.json(memoryWallData.title);
});

//get about
router.get("/getMemoryWallById/:id/about", (req, res) => {
  const memoryWallData = memoryWall.find((m) => m.id === req.params.id);
  res.json(memoryWallData.about);
});

//put about
router.put("/getMemoryWallById/:id/about", (req, res) => {
  const memoryWallData = memoryWall.find((m) => m.id === req.params.id);
  memoryWallData.about = req.body.aboutText;
  res.json(memoryWallData.about);
});

//delete about
router.delete("/getMemoryWallById/:id/about", (req, res) => {
  const memoryWallData = memoryWall.find((m) => m.id === req.params.id);
  memoryWallData.about = "";
  res.json(memoryWallData.about);
});

//get highlightsNews
router.get("/getMemoryWallById/:id/highlightsNews", (req, res) => {
  const memoryWall = memoryWall.find((m) => m.id === req.params.id);
  res.json(memoryWall.highlightsNews);
});

//post highlightsNews
router.post("/getMemoryWallById/:id/highlightsNews", (req, res) => {
  const memoryWallData = memoryWall.find((m) => m.id === req.params.id);
  const newHighlight = req.body;
  memoryWallData.highlightsNews.push(newHighlight);
  res.json(memoryWallData.highlightsNews);
});

//put highlightsNews
router.put("/getMemoryWallById/:id/highlightsNews/:id", (req, res) => {
  const memoryWallData = memoryWall.find((m) => m.id === req.params.id);
  const highlight = memoryWallData.highlightsNews.find(
    (h) => h.id === req.params.id
  );
  highlight.imagePath = req.body.imagePath;
  highlight.date = req.body.date;
  highlight.title = req.body.title;
  highlight.text = req.body.text;
  res.json(memoryWallData.highlightsNews);
});

//get deceasedsInfo
router.get("/getMemoryWallById/:id/deceasedsInfo", (req, res) => {
  const memoryWall = memoryWall.find((m) => m.id === req.params.id);
  res.json(memoryWall.deceasedsInfo);
});

//put deceasedsInfo
router.put("/getMemoryWallById/:id/deceasedsInfo/:deceasedId", (req, res) => {
  const { name, donationAmount, imgPath } = req.body;
  const memoryWallId = req.params.id;
  const deceasedId = parseInt(req.params.deceasedId);

  // Find the memory wall
  const memoryWallData = memoryWall.find((m) => m.id === memoryWallId);
  if (!memoryWallData) {
    return res.status(404).json({ error: "Memory wall not found" });
  }

  // Find the deceased person
  const deceasedInfoIndex = memoryWallData.deceasedsInfo.findIndex(
    (d) => d.id === deceasedId
  );
  if (deceasedInfoIndex === -1) {
    return res.status(404).json({ error: "Deceased person not found" });
  }

  // Validate and update the deceased person's information
  if (name && typeof name === "string") {
    memoryWallData.deceasedsInfo[deceasedInfoIndex].name = name;
  }

  if (imgPath && typeof imgPath === "string") {
    memoryWallData.deceasedsInfo[deceasedInfoIndex].imgPath = imgPath;
  }

  if (donationAmount && typeof donationAmount === "number") {
    memoryWallData.deceasedsInfo[deceasedInfoIndex].donationAmount =
      donationAmount;
  }

  // Handle potential errors during the update operation
  try {
    // Save the updated memory wall data (assuming you have a save/update function)
    // saveMemoryWallData(memoryWallData);
    res.json(memoryWallData.deceasedsInfo[deceasedInfoIndex]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

//delete deceasedsInfo
router.delete(
  "/getMemoryWallById/:id/deceasedsInfo/:deceasedId",
  (req, res) => {
    const memoryWallData = memoryWall.find((m) => m.id === req.params.id);
    if (!memoryWallData) {
      return res.status(404).json({ error: "Memory wall not found" });
    }
    const deceasedInfoIndex = memoryWallData.deceasedsInfo.findIndex(
      (d) => d.id === parseInt(req.params.deceasedId)
    );
    if (deceasedInfoIndex === -1) {
      return res.status(404).json({ error: "Deceased info not found" });
    }
    // memoryWallData.deceasedsInfo.splice(deceasedInfoIndex, 1);
    memoryWallData.deceasedsInfo = memoryWallData.deceasedsInfo.filter(
      (d) => d.id != req.params.deceasedId
    );
    res.json(memoryWallData.deceasedsInfo);
  }
);

// //post deceasedsInfo
// router.post("/getMemoryWallById/:id/deceasedsInfo", (req, res) => {
//   const memoryWallData = memoryWall.find((m) => m.id === req.params.id);
//   const newDeceased = req.body;
//   newDeceased.id = memoryWallData.deceasedsInfo.length + 1;
//   memoryWallData.deceasedsInfo.push(newDeceased);
//   res.json(memoryWallData.deceasedsInfo);
// });
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

router.post(
  "/getMemoryWallById/:id/deceasedsInfo",
  upload.single("imgPath"),
  (req, res) => {
    console.log(req.file);
    //console.log("req.body.data.name", req.body.data.name);
    try {
      const memoryWallData = memoryWall.find((m) => m.id === req.params.id);

      if (!memoryWallData) {
        return res.status(404).json({ message: "Memory wall not found" });
      }

      const name = req.body.name;
      const donationAmount = req.body.donationAmount;
      let imgPath = req.file ? req.file.path : null;
      console.log("name", name);

      // Validate request data
      if (!name || !donationAmount) {
        return res
          .status(400)
          .json({ message: "name and donation amount are necessary" });
      }
      if (!imgPath) {
        imgPath = "uploads\\pen 6.png";
      }

      const memoryWallId = memoryWallData.deceasedsInfo.length + 1;
      const newDeceased = {
        id: memoryWallId,
        name: name,
        donationAmount: donationAmount,
        imgPath: imgPath,
      };

      // Handle the file upload and form data for creating new records
      // Your database insertion logic here...
      // Example: YourDatabaseModel.create(newDeceased);

      memoryWallData.deceasedsInfo.push(newDeceased);

      res.json({
        message: "Data added successfully",
        newDeceased: newDeceased,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
);

module.exports = router;
