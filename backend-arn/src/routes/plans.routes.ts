import { Router } from "express";
import { ListPlansController } from "../controller/plan/ListPlansController";

const listPlans = new ListPlansController()

const planRoutes = (router: Router): void => {
    router.get("/plans/list", listPlans.execute.bind(ListPlansController));
}

export { planRoutes }