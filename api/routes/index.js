import { Router } from 'express';

import auth from './auth';
import staticc from './static';

const router = Router();

router.use('/auth', auth);

router.get('*', staticc);

export default router;
