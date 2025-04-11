import { Router } from 'express';
import { getAllWaitlists, submitWaitlist } from '../controllers/waitlist.controller';

const router = Router();

router.post('/waitlist', submitWaitlist);
router.get('/waitlist', getAllWaitlists);

export default router;