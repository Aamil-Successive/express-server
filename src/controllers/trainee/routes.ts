import { Router } from 'express';
import trainee from './Controller';

const router: Router = Router();

router.get('/', trainee.get);
router.post('/', trainee.post);
router.put('/', trainee.put);
router.delete('/', trainee.delete);

export default router;
