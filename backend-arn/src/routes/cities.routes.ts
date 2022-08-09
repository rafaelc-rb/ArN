import { Router } from "express";
import { ListCitiesController } from "../controller/city/ListCitiesController";

const list = new ListCitiesController()

const cityRoutes = (router: Router): void => {
    router.get("/cities", list.execute.bind(ListCitiesController));
}

export { cityRoutes }