import express from "express";
import fs from "fs";
import { v4 as uuidv4 } from "uuid";

const app = express();
const port = 7000;
app.use(express.json());

app.listen(port, () => {
  console.log(`server is run ${`http://localhost:${port}`}`);
});

const { users } = JSON.parse(fs.readFileSync("database/db.json"));
const path = "/api/users";

// Routes
app.get(`${path}`, GetAll);
app.get(`${path}/:id`, GetById);
app.post(`${path}`, Create);
app.delete(`${path}/:id`, Delete);
app.put(`${path}/:id`, Put);
app.patch(`${path}/:id`, Patch);

// Methods
app.get("/", (req, res) => {
  res.send("Hello Pese tedris");
});

export const GetAll = (req, res) => {
  (req, res) => {
    try {
      const { users } = JSON.parse(fs.readFileSync("database/db.json"));
      res.status(200).json({ message: "success", data: users });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  };
};

export const GetById = (req, res) => {
  (req, res) => {
    try {
      const { id } = req.params;

      const user = users.find((user) => user.id == id);

      if (!user) {
        return res.status(404).json({ message: "user not found" });
      }

      res.status(200).json({ message: "success", data: user });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  };
};

export const Create = (req, res) => {
  (req, res) => {
    try {
      const newUser = req.body;

      if (!newUser.name || !newUser.surname || !newUser.age) {
        return res.status(400).json({ message: "Please fill all fields!" });
      }

      users.push({ id: uuidv4(), ...newUser });

      fs.writeFileSync("database/db.json", JSON.stringify({ users }));

      res.status(201).json({ message: "user created", data: newUser });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  };
};

export const Delete = (req, res) => {
  (req, res) => {
    try {
      const { id } = req.params;

      const userIndex = users.findIndex((user) => user.id == id);

      if (userIndex == -1) {
        res.status(404).json({ message: "User not found" });
      }

      users.splice(userIndex, 1);

      fs.writeFileSync("database/db.json", JSON.stringify({ users }));

      res.status(200).json({ message: "user deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  };
};

export const Put = (req, res) => {
  (req, res) => {
    try {
      const { id } = req.params;

      const updatedUser = req.body;

      const userIndex = users.findIndex((user) => user.id == id);

      if (userIndex == -1) {
        res.status(404).json({ message: "User not found" });
      }

      users[userIndex] = { id, ...updatedUser };

      fs.writeFileSync("database/db.json", JSON.stringify({ users }));

      res
        .status(200)
        .json({ message: "user updated success", data: users[userIndex] });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  };
};

export const Patch = (req, res) => {
  (req, res) => {
    try {
      const { id } = req.params;

      const updatedUser = req.body;

      const userIndex = users.findIndex((user) => user.id == id);

      if (userIndex == -1) {
        res.status(404).json({ message: "User not found" });
      }

      users[userIndex] = { ...users[userIndex], ...updatedUser };

      fs.writeFileSync("database/db.json", JSON.stringify({ users }));

      res
        .status(200)
        .json({ message: "user updated success", data: users[userIndex] });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  };
};
