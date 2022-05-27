import { v4 as uuid } from "uuid";

let users = [
  {
    id: uuid(),
    name: "Emin",
    email: "basbayanemin@gmail.com",
    country: "Turkey",
    contact: "5555555555",
  },
  {
    id: uuid(),
    name: "Nur",
    email: "nurbasbayan@gmail.com",
    country: "Turkey",
    contact: "5555555555",
  },
];

export const getUsers = (req, res) => {
  res.send(users);
};

export const getSingleUser = (req, res) => {
  const id = req.params.id;
  const user = users.find((u) => u.id === id);
  if (!user) {
    res.status(400).send("User not found!");
  }
  res.send(user);
};

export const createUser = (req, res) => {
  const { name, email, country, contact } = req.body;
  const user = {
    id: uuid(),
    name: name,
    email: email,
    country: country,
    contact: contact,
  };

  users.push(user);
  res.send("New user created!");
};

export const deleteUser = (req, res) => {
  const id = req.params.id;
  const user = users.find((u) => u.id === id);
  users = users.filter((u) => u.id !== id);
  if (!user) {
    res.status(400).send("User not found!");
  }
  res.send(users);
};

export const updateUser = (req, res) => {
  const id = req.params.id;
  const user = users.find((u) => u.id === id);
  const { name, email, country, contact } = req.body;
  if (!user) {
    res.status(400).send("User not found!");
  }
  user.name = name;
  user.email = email;
  user.country = country;
  user.contact = contact;
  res.send("Updated user!");
};
