import { Request, Response } from 'express';
import { prisma } from '../../service/prisma'


class ListPlansController {
    async execute(req: Request, res: Response) {
        try {
            const plans = await prisma.plan.findMany(
                    {
                        select: {
                            mb: true,
                            price: true,
                            city: {
                                select:{
                                    name: true
                                }
                            },
                            zone: {
                                select:{
                                    name: true
                                }
                            },
                            technology: {
                                select:{
                                    name: true
                                }
                            },
                        }     
                    }
                )
            console.log(plans)
            return res.status(200).json(plans)
        } catch (err) {
            return res.status(400).json(err)
        }
    }

}

export { ListPlansController }