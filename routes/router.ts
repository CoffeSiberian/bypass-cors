import { Express } from "express";
import getApiResponse from "./getApiResponse";

// POST

// GET

export default function (app: Express) {
    app.get("/api/getApiResponse", getApiResponse);
}