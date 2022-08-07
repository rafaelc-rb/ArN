import { Router } from "express";
import { planRoutes } from "./plans.routes";

const router = Router();
planRoutes(router)


export { router }