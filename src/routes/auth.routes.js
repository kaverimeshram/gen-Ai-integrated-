const { Router } = require('express');
const authController = require('../controllers/auth.controllers.js');
const authMiddleware = require('../middlewares/auth.middleware');

const authRouter = Router();

/**
 * @route POST /api/auth/register
 * @access Public
 */
authRouter.post("/register", authController.registerUserController);

/**
 * @route POST /api/auth/login
 * @access Public
 */
authRouter.post("/login", authController.loginUserController);

/**
 * @route GET /api/auth/get-me
 * @access Private
 */
// authRouter.get("/get-me", authMiddleware.authUser, authController.getMeUserController);

/**
 * @route GET /api/auth/logout
 * @access Private
 */
// authRouter.get("/logout", authMiddleware.authUser, authController.logoutUserController);

module.exports = authRouter;

