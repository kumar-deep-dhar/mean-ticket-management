const express = require("express");
const router = express.Router();
const teamController = require("../controller/teamController");

router.post("/create", teamController.createTeam);
router.get("/get", teamController.getAllTeams);
router.get("/get-team/:teamId", teamController.getTeamById);
router.patch(
  "/:teamId/assign-engineer/:engineerId",
  teamController.assignEngineerToTeam
);
router.patch("/update/:teamId", teamController.updateTeam);
router.delete("/delete/:teamId", teamController.deleteTeam);
router.patch("/shuffle-members", teamController.shuffleMembers);

module.exports = router;
