import express from 'express';
import { userList } from "./users";
import { wrapAsync } from "../common/wrapper"

const usersRouter = express.Router();

usersRouter.route('/')
    .get(wrapAsync(userList));

export { usersRouter };
