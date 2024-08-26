const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

// middlewares
app.use(express.json());
app.use(cors());

const users = [
  { id: 1, name: "Sabana", email: "sabana@gmail.com" },
  { id: 2, name: "sokina", email: "sokina@gmail.com" },
  { id: 3, name: "sabnur", email: "sabnur@gmail.com" },
];

app.get("/", (req, res) => {
  res.send("Server is runing");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.listen(port, () => {
  console.log(`Server is runing on port ${port}`);
});
