import { Response } from 'express';
import { prisma } from '../../service/prisma'


class ListPlansController {
    async execute(res: Response) {
        try {
            const plans = await prisma.plan.findMany({
            })
            console.log(plans)
            return res.status(200).json(plans)
        } catch (err) {
            return res.status(400).json(err)
        }
    }
}

export { ListPlansController }