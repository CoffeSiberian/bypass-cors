import { Express } from "express";
import { checkValues, isCached } from "../middlewares/appMiddleware";

// POST

// GET
import getApiResponse from "./getApiResponse";

export default function (app: Express) {
    app.get("/api/getApiResponse/", checkValues, isCached, getApiResponse);
}
