import { Request, Response as apiResponse } from "express";
import { getFetch } from "../helpers/dataFetch";
import { BodyGetTypes } from "../types/bodyGetTypes";

const getApiResponse = async (req: Request, res: apiResponse) => {
    let bodyData: BodyGetTypes = req.body;

    let apiResponse = await getFetch(
        bodyData.body,
        bodyData.headers,
        new URL(bodyData.url)
    );

    res.status(apiResponse.status);
    try {
        res.send(await apiResponse.json());
    } catch (e) {
        res.status(404);
        res.send(JSON.stringify({ error: "The API did not return a json" }));
    }
};

export default getApiResponse;
