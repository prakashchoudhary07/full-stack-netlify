import express, { Router } from "express";
import serverless from "serverless-http";

const api = express();

const router = Router();
router.get("/hello", (req, res) => res.status(200).json({ message: "Successful hello world", statusCode: 200}));

api.use("/api/", router);

export const handler = serverless(api);