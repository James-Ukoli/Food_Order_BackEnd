import express, {Request, Response, NextFunction} from 'express';
import { CreateVandor, GetVandorbyId, GetVandors } from '../controllers/AdminController';


const router = express.Router();

router.post('/vandor', CreateVandor)

router.get('/vandors', GetVandors)

router.get('/vandors/:id', GetVandorbyId)


router.get('/', (req: Request, res: Response, next: NextFunction) => {
res.json("Hello from the Admin Route ")
})

export { router as AdminRoute}