import express = require("express");
import { Request, Response } from "express";

const router = express.Router();

// router.get("/:city", (req: Request, res: Response) => {
  
//     return res.send(`Request Recieved`);
// });


// Fetch Case from Db.
router.get('/:caseId', (req: Request, res: Response)  => {
    return res.send(`Fetch Case ${req.params.caseId}`);
});

// Add Case to Db.
router.post('/', (req: Request, res: Response)  => {
    return res.send('Add New Case to DB.');
});

// Update Case in Db.
router.put('/:caseId', (req: Request, res: Response)  => {
    return res.send(`Update Case ${req.params.caseId}`);
});

// Delete Case from Db.
router.delete('/:caseId', (req: Request, res: Response)  => {
    return res.send(`Update Case ${req.params.caseId}`);
});

// Export the router
export default router;