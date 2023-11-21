const Engineer = require("../models/engineer.model");
const Team = require("../models/team.model");

// Controller to Create Engineer
exports.createEngineer = async (req, res) => {
  try {
    const { name, team, status } = req.body;
    const dailyTickets = 5;
    const dailyRejections = 1;
    const existingEngineer = await Engineer.findOne({ name });
    if (existingEngineer) {
      return res
        .status(400)
        .json({ error: "Engineer with the same name already exists" });
    }
    const engineer = new Engineer({
      name,
      team,
      status,
      dailyTickets,
      dailyRejections,
    });
    await engineer.save();
    res.status(201).json(engineer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
