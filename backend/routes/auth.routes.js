import express from 'express';
import auth from '../controllers/auth';
const router = express.Router();


router.post('/signup',auth.signUp );

module.exports = router;
