import { Router } from "express";
import { ListPlansController } from "../controller/plan/ListPlansController";

const list = new ListPlansController()

const planRoutes = (router: Router): void => {
    router.get("/plans/list", list.execute.bind(ListPlansController));
}

export { planRoutes }