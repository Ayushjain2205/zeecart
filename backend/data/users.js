import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Ayush",
    email: "ayush@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Anvika",
    email: "anvika@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Baba Shankar",
    email: "babashankar@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
