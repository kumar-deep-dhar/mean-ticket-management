const Team = require("../models/team.model");
const Engineer = require("../models/engineer.model");

//Controller to create a new team
exports.createTeam = async (req, res) => {
  try {
    const { name } = req.body;
    const team = new Team({
      name,
    });
    await team.save();
    res.status(201).json(team);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//Controller to get all teams

exports.getAllTeams = async (req, res) => {
  try {
    const teams = await Team.find();
    res.status(400).json(teams);
  } catch (error) {
    res.status(500).json({ error: "Internal Server error" });
  }
};

//Controller to get team by Id.
exports.getTeamById = async (req, res) => {
  try {
    const { teamId } = req.params;
    const team = await Team.findById(teamId);
    if (!team) {
      return res.status(404).json({ error: "Team not found" });
    }
    res.status(200).json(team);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server error" });
  }
};

//Controller to shuffle team members

exports.shuffleMembers = async (req, res) => {
  try {
    const { sourceTeamId, destinationTeamId, memberIds } = req.body;
    const sourceTeam = Team.findById(sourceTeamId);
    const destinationTeam = Team.findById(destinationTeamId);
    if (!sourceTeam || !destinationTeam) {
      return res
        .status(404)
        .json({ error: "Source Team or Destination Team not found" });
    }
    const invalidMembers = memberIds.filter(
      (memberId) => !sourceTeam.members.includes(memberIds)
    );
    if (invalidMembers.length() > 0) {
      return res
        .status(400)
        .json({ error: "Invalid Member IDs for the source team" });
    }
    sourceTeam.members = [...destinationTeam.members, ...memberIds];
    await Promise.all([sourceTeam.save(), destinationTeam.save()]);
    res.status(200).json({ message: "Members Shuffled Successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//Controller to Assign Engineers to team
exports.assignEngineerToTeam = async (req, res) => {
  try {
    const { teamId, engineerId } = req.params;
    const team = await Team.findById(teamId);
    if (!team) {
      return res.status(404).json({ error: "Team not found" });
    }
    const engineer = await Engineer.findById(engineerId);
    if (!engineer) {
      return res.status(404).json({ error: "Engineer not found" });
    }
    team.engineers.push(engineerId);
    await team.save();
    res.status(200).json(team);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server error" });
  }
};

//controller to update a team
exports.updateTeam = async (req, res) => {
  try {
    const { teamId } = req.params;
    const updatedTeam = await Team.findByIdAndUpdate(teamId, req.body, {
      new: true,
    });
    if (!updatedTeam) {
      return res.status(404).json({ error: "Team not found" });
    }
    res.status(200).json(updatedTeam);
  } catch (error) {
    console.error(error);
    res.send(500).json({ error: "Internal Server Error" });
  }
};

// Controller to delete a team
exports.deleteTeam = async (req, res) => {
  try {
    const { teamId } = req.params;
    const deletedTeam = await Team.findByIdAndDelete(teamId);

    if (!deletedTeam) {
      return res.status(404).json({ error: "Team not found" });
    }

    res.status(200).json({ message: "Team deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
