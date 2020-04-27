const express = require("express");
const faker = require("faker");
const app = express();

const port = process.env.PORT || 5200;

app.get("/profile", (req, res) => {
  res.json({
    status: true,
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phone: faker.phone.phoneNumber(),
    email: faker.internet.email(),
    avatar: faker.internet.avatar(),
  });
});

app.listen(port, () => {
  console.log(`App is running on ${port}`);
});

