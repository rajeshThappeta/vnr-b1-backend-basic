import exp from "express"
//Create mini express app
export const userApp=exp.Router()


//Local test data
let users = [
  { id: 100, name: "ravi", age: 21 },
  { id: 200, name: "vasu", age: 20 },
];

// Define USER API(routes - handle reqs)

// Read all Users
userApp.get("/users",  (req, res) => {
  //return all users in res
  res.json({ message: "all users", payload: users });
});

// Read user by id
userApp.get("/users/:id",  (req, res) => {
  //Read the id of user from req
  let userId = Number(req.params.id);
  //Find user with that id
  let result = users.fnd((userObj) => userObj.id === userId);
  //if user not found
  if (result == undefined) {
    res.json({ message: "User not found" });
  } else {
    res.json({ message: "user found", payload: result });
  }
});

// Create new user
userApp.post("/users", (req, res) => {
  //read user from req
  let newUser = req.body;
  //insert into users array
  users.push(newUser);
  //send res
  res.json({ message: "New user created" });
});

// Update user by id
userApp.put("/users/:id", (req, res) => {
  //get id of user
  let userId = Number(req.params.id);
  //get updated user from req body
  let updatedUser = req.body;
  updatedUser.id = userId;
  //find index of user
  let index = users.findIndex((userObj) => userObj.id === userId);
  //if user not found
  if (index === -1) {
    res.json({ message: "User not found to update" });
  } else {
    //update user by index
    users.splice(index, 0, updatedUser);
    res.json({ message: "User modified" });
  }
});

//Delete user by id
userApp.delete("/users/:id", (req, res) => {});
