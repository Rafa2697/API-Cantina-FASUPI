import {Router} from 'express';

const router = Router();

router.get("/", (req, res) => {
    res.send("API Cantina Fasupi")
});

export default router;