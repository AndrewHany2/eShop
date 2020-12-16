import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Andrew Hany",
    email: "andrew@gmail.com",
    password: bcrypt.hashSync("1234567", 10),
  },
  {
    name: "Andrew Hany 2",
    email: "andrew2@gmail.com",
    password: bcrypt.hashSync("12345689", 10),
  },
];

export default users;
