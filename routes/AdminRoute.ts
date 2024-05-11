import express, {Request, Response, NextFunction} from 'express';
// import { CreateVandor } from '../controllers/AdminController';

const router = express.Router();



router.get('/', (req: Request, res: Response, next: NextFunction) => {
res.json({message: "Hello from the Admin Route "})
})

export { router as AdminRoute}