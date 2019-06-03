import express = require("express");
import { Request, Response } from "express";

const router = express.Router();

// Fetch Case from Db.
router.get('/:hearing', (req: Request, res: Response) => {
    return res.send(`Fetch Hearing ${req.params.caseId}`);
});

// Add Case to Db.
router.post('/', (req: Request, res: Response) => {
    return res.send('Add Hearing to DB.');
});

// Update Case in Db.
router.put('/:hearing', (req: Request, res: Response) => {
    return res.send(`Update Hearing ${req.params.caseId}`);
});

// Delete Case from Db.
router.delete('/:hearing', (req: Request, res: Response) => {
    return res.send(`Update Hearing ${req.params.caseId}`);
});

// Export the router
export default router;