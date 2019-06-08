import express = require("express");
import { Request, Response } from "express";

const router = express.Router();

// Fetch Case from Db.
router.get('/:hearingId', (req: Request, res: Response) => {
    return res.send(`Fetch Hearing ${req.params.hearingId}`);
});

// Add Case to Db.
router.post('/', (req: Request, res: Response) => {
    return res.send('Add Hearing to DB.');
});

// Update Case in Db.
router.put('/:hearingId', (req: Request, res: Response) => {
    return res.send(`Update Hearing ${req.params.hearingId}`);
});

// Delete Case from Db.
router.delete('/:hearingId', (req: Request, res: Response) => {
    return res.send(`Update Hearing ${req.params.hearingId}`);
});

// Export the router
export default router;