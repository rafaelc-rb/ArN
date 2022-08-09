import { Router } from "express";
import { planRoutes } from "./plans.routes";
import { cityRoutes } from "./cities.routes";

const router = Router();
planRoutes(router)
cityRoutes(router)

export { router }