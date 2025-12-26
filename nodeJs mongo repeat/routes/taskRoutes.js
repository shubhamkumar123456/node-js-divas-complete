import express from 'express'
import { createTask, deleteTask, getAllTask, updateTask } from '../controllers/taskController.js';
const router  = express.Router();

router.post('/create/:userId',createTask);
router.get('/task/:userId',getAllTask);
router.put('/task/:id',updateTask);
router.delete('/task/:id',deleteTask);

export default router
