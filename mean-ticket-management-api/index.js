const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(
  "mongodb+srv://kumar:Admin123@cluster0.rkkxbtb.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    serverSelectionTimeoutMS: 5000,
  }
);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", function () {
  console.log("Connected to MongoDB");
});


const ticketRoutes = require("./routes/ticketRoutes");
const teamRoutes = require("./routes/teamRoutes");
const engineerRoutes = require("./routes/engineerRoutes");

const { authorizeTeamAccess } = require("./Middleware/authMiddleware");
const { validateTicketCreation } = require("./Middleware/ticketMiddleware");


app.use("/api/tickets*", authorizeTeamAccess);
app.use("/api/teams*", authorizeTeamAccess);
app.use("/api/engineers*", authorizeTeamAccess);


app.use("/api/tickets", ticketRoutes);
app.use("/api/teams", teamRoutes);
app.use("/api/engineers", engineerRoutes);
// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});


app.use((req, res) => {
  res.status(404).send("Not Found");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port <a href="http://localhost:${PORT}" target="_blank">http://localhost:${PORT}</a>`);
});
