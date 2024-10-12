import express from "express";
import HomeController from "../controllers/homecontroller.js";
import LoginController from "../controllers/login/logincontroller.js";
import VehicleController from "../controllers/tracuu/Vehicle.js";
const rootRouter = express.Router();

rootRouter.get("/", HomeController.Home);
rootRouter.get("/Vehicle", VehicleController.Vehicle);
rootRouter.get("/login", LoginController.Login);
rootRouter.post("/login", LoginController.handleLogin);

export default rootRouter;
