const authorizeTeamAccess = (req, res, next) => {
  const { user, params } = req;

  if (!user) {
    return res
      .status(401)
      .json({ error: "Unauthorized - User not authenticated" });
  }
  if (user.team.toString() !== params.teamId) {
    return res
      .status(403)
      .json({ error: "Unauthorized access to team resource" });
  }
  next();
};

module.exports = { authorizeTeamAccess };
