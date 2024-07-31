import { Router } from "express";
import { authUser, deleteUser, getUser, getUserProfile, getUsers, logoutUser, registerUser, updateUser, updateUserProfile } from "../controllers/userController.js";
import { admin, protect } from "../middleware/authMiddleware.js";
const router = Router()

router.route("/").get(protect, admin, getUsers).post(registerUser)
router.post("/logout", logoutUser)
router.post("/login", authUser)
router.route("/profile").get(protect, getUserProfile).put(protect, updateUserProfile)
router.route("/:id").delete(protect, admin, deleteUser).get(protect, admin, getUser).put(protect, admin, updateUser)

export default router;