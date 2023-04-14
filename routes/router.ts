import { Express } from "express";
import { checkValues } from "../middlewares/appMiddleware";

// POST

// GET
import getApiResponse from "./getApiResponse";

export default function (app: Express) {
    app.use(checkValues);
    app.get("/api/getApiResponse/", getApiResponse);
}
