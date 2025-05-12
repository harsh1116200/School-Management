const express = require("express");
require("dotenv").config();
const app = express();
const schoolRoutes = require("./routes/schools");

app.use(express.json());
app.use("/api", schoolRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
