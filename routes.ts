import { Router } from "express"
import { CreateUserController } from "./src/controllers/CreateUserController"
import { CreateTagController } from "./src/controllers/CreateTagController";
import { ensureAdmin } from "./src/middlewares/ensureAdmin";
import { AuthenticateUserController } from "./src/controllers/AuthenticateUserController";
import { CreateComplimentController } from "./src/controllers/CreateComplimentController";
import { ensureAuthenticated } from "./src/middlewares/ensureAuthenticated";
import { ListUserSendComplimentsController } from "./src/controllers/ListUserSendComplimentsController";
import { ListUserReceiveComplimentsController } from "./src/controllers/ListUserReceiverComplimentsController";
import { ListTagsController } from "./src/controllers/ListTagsController";
import { ListUsersController } from "./src/controllers/ListUserController";
import { DeleteTagController } from "./src/controllers/DeleteTagController";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listUserSendComplimentsController = new ListUserSendComplimentsController();
const listUserReceiveComplimentsController = new ListUserReceiveComplimentsController();

const listTagsController = new ListTagsController();
const listUsersController = new ListUsersController();

//delete
const deleteTagController = new DeleteTagController();

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

router.get(
    "/users/compliments/send",
    ensureAuthenticated, 
    listUserSendComplimentsController.handle
);
router.get(
    "/users/compliments/receive",
    ensureAuthenticated,
    listUserReceiveComplimentsController.handle
);
router.get(
    "/tags", 
    ensureAuthenticated,
    listTagsController.handle
);

router.get(
    "/users",
    ensureAuthenticated,
    listUsersController.handle
);

router.delete(
    "/tags/:id",
    ensureAuthenticated,
    ensureAdmin, 
    deleteTagController.delete
);


export { router };