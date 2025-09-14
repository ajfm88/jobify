import { Router } from "express";
const router = Router();
import { logout } from "../controllers/authController.js";
import { register, login } from "../controllers/authController.js";
import { validateRegisterInput } from "../middleware/validationMiddleware.js";
import { validateLoginInput } from "../middleware/validationMiddleware.js";
import { authorizePermissions } from "../middleware/authMiddleware.js";

router.get("/admin/app-stats", [
  authorizePermissions("admin"),
  getApplicationStats,
]);

router.post("/register", validateRegisterInput, register);
router.post("/login", validateLoginInput, login);
router.get("/logout", logout);

export default router;
