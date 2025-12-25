import express from 'express';
import { createUser, deleteUser, loginUser, updateUser } from '../controllers/userController.js';
const router = express.Router();


router.post('/register',createUser)
router.post('/login',loginUser)
router.put('/update/:id',updateUser)
router.delete('/delete',deleteUser);


export default router;