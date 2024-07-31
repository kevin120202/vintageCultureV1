import { Router } from "express";
import { authUser, deleteUser, getUser, getUserProfile, getUsers, logoutUser, registerUser, updateUser, updateUserProfile } from "../controllers/userController.js";
const router = Router()

router.route("/").get(getUsers).post(registerUser)
router.post("/logout", logoutUser)
router.post("/login", authUser)
router.route("/profile").get(getUserProfile).put(updateUserProfile)
router.route("/:id").delete(deleteUser).get(getUser).put(updateUser)

export default router;