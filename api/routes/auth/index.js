import { Router } from 'express';

import passport from '../../passport';

const router = Router();

router.get(
    '/steam',
    passport.authenticate('steam', { failureRedirect: '/' }),
    (req, res) => {
        res.redirect('/');
    }
);

router.get(
    '/steam/return',
    passport.authenticate('steam', { failureRedirect: '/' }),
    (req, res) => {
        res.redirect('/');
    }
);

export default router;
