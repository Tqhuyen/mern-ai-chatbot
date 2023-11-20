import { Router } from "express";
import userRoute from "./user_routes.js";
import chatRoute from "./chat_route.js";
const appRouter = Router();
appRouter.use("/user", userRoute);
appRouter.use("/chat", chatRoute);
export default appRouter;
//# sourceMappingURL=index.js.map