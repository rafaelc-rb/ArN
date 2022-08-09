import { Request, Response } from 'express';
import { prisma } from '../../service/prisma'


class ListCitiesController {
    async execute(req: Request, res: Response) {
        try {
            const cities = await prisma.city.findMany
                (
                    {
                        select: {
                            id: true,
                            name: true
                        }
                    }
                )
            console.log(cities)
            return res.status(200).json(cities)
        } catch (err) {
            return res.status(400).json(err)
        }
    }

}

export { ListCitiesController }