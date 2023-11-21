const validateTicketInput = (req, res, next) => {
  const { name, address, mobileNumber, flavor, email } = req.body;
  if (!name || !address || !mobileNumber || !flavor || !email) {
    return res.status(400).json({ error: "Missing required fields" });
  }
  const mobileRegex = /^\d{10}$/;
  if (!mobileRegex.test(mobileNumber)) {
    return res.status(400).json({ error: "Invalid mobile number format" });
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email format" });
  }
  next();
};

module.exports = { validateTicketInput };
