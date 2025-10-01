import { Router } from "express";
import { signup } from "../controller/userController.js";
import { login } from "../controller/loginController.js";
import { logout } from "../controller/logoutController.js";

 const route = Router();
 route.post("/signup",signup)
 route.post("/login",login)
 route.post("/logout", logout);

  export default route;
