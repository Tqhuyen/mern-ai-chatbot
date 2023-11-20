import {Router} from "express";

import { getAllUser, userSingUp } from "../controllers/user_controller.js";
const userRoute = Router();

userRoute.get("/", getAllUser);
userRoute.post("/signup", userSingUp)
export default userRoute;