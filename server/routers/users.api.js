const { Router } = require("express");
const router = Router();
// const { v4: uuidv4 } = require("uuid");

const User = require("../modules/users.mongoose");

router.post("/register", async (request, response) => {
  const { name, lastName, age, address, phone } = request.body;

  const newUser = {
    name: name,
    lastName: lastName,
    age: age,
    address: address,
    phone: phone,
    // password: password,
    // tokenUser: uuidv4(),
  };

  try {
    const user = new User(newUser);
    await user.save();
    response.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    if (error.code === 11000) {
      const field = Object.keys(error.keyPattern)[0];
      return response
        .status(400)
        .json(
          `${field.charAt(0).toUpperCase() + field.slice(1)} already exists`
        );
    }
    response.status(500).json({ error: error.message });
  }
});

module.exports = router;
