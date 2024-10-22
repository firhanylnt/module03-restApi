import { Router } from "express";
import { GetExpenseList, GetExpenseDetail, CreateNewExpense, UpdateExistingExpense, DeleteExpense } from "../controllers/tracker.controller";

const router = Router();

router.get("/tracker", GetExpenseList);
router.get("/tracker/:id", GetExpenseDetail);
router.post("/tracker", CreateNewExpense)
router.put("/tracker/:id", UpdateExistingExpense);
router.delete("/tracker/:id", DeleteExpense);

export default router;