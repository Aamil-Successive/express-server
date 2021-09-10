import { Router } from 'express';
import user from './Controller';

const router: Router = Router();

router.get('/', user.get);
router.post('/', user.post);
router.put('/', user.put);
router.delete('/', user.delete);

export default router;
