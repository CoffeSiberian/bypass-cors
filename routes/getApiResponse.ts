import { Request, Response } from "express";

const getApiResponse = async (req: Request, res: Response) => {
    res.send("Hello World!");
};

export default getApiResponse;