import { Request, Response } from "express";
import { BodyGetTypesNull } from "../types/bodyGetTypes";

const checkValues = async (
    req: Request,
    res: Response,
    next: Function
): Promise<Function | void> => {
    let bodyData: BodyGetTypesNull = req.body;
    console.log(bodyData.url);
    if (
        !(
            bodyData.url === undefined ||
            bodyData.headers === undefined ||
            bodyData === undefined
        )
    )
        return next();
    res.status(500);
    res.send({ error: "need more data" });
};

export { checkValues };
