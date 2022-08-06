import { Request, Response } from "express";
import { prisma } from '../../service/prisma'


class CreatePlanController {
    async execute(req: Request, res: Response) {
        try {
            const { id, mb, price } = req.body

            return res.status(200).json()
        } catch (err) {
            return res.status(400).json()
        }
    }
}

export { CreatePlanController }