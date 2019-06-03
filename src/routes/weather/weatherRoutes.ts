import express = require("express");
import { Request, Response } from "express";

const router = express.Router();

router.get("/:city", (req: Request, res: Response) => {
  
    return res.send(`Request Recieved`);
});

export default router;