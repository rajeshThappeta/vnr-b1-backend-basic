// Create HTTP server
import exp from "express";
import { userApp } from "./APIs/userAPI.js";
import { productApp } from "./APIs/productAPI.js";

const app = exp();

//assign a port number to server(through whioch it can listen frontend reqs)
app.listen(4000, () => console.log("server listening on port 4000"));

//add body parser middleware
app.use(exp.json());

//forward req to specific APIs
app.use("/user-api", userApp);
app.use("/product-api", productApp);

//Error handling middleware
app.use(function (error, req, res, next) {
  res.json({ message: "error occurred", reason: error.message });
});

// req ---> user api or product api

//http://localhost:4000/user-api/users/1
//http://localhost:4000/product-api/products/1
