import { Router } from "express"
import { CreateUserController } from "./src/controllers/CreateUserController"
import { CreateTagController } from "./src/controllers/CreateTagController";
import { ensureAdmin } from "./src/middlewares/ensureAdmin";
import { AuthenticateUserController } from "./src/controllers/AuthenticateUserController";
import { CreateComplimentController } from "./src/controllers/CreateComplimentController";
import { ensureAuthenticated } from "./src/middlewares/ensureAuthenticated";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();

router.post(
    "/tags",
    ensureAuthenticated,
    ensureAdmin,
    createTagController.handle
);
router.post("/users",createUserController.handle);
router.post("/login", authenticateUserController.handle);
router.post(
    "/compliments",
    ensureAuthenticated, 
    createComplimentController.handle
);

export { router };