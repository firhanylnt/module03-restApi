import { Request, Response, NextFunction } from "express";
import axios from "axios";
import { API_URL } from "../config";

async function GetExpenseList(req: Request, res: Response, next: NextFunction) {
  try {
    const { category } = req.query;
    let url = null
    if(!category){
        url = API_URL
    }else{
        url = API_URL + `?category=${category}`
    }

    const response = await axios.get(`${url}`);

    res.status(200).send({
        message: "Get Expense List",
        data: response.data,
      });
  } catch (err) {
    next(err);
  }
}

async function GetExpenseDetail(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.params;

    const response = await axios.get(`${API_URL}/${id}`)
    res.status(200).send({
        message: `Get Expense Detail id : ${id}`,
        data: response.data,
      });
  } catch (err) {
    next(err);
  }
}

async function CreateNewExpense(req: Request, res: Response, next: NextFunction) {
    try {
        const { title, nominal, type, category, date } = req.body;
        const payload = {
            title, nominal, type, category, date
        }
        const response = await axios.post(`${API_URL}`, payload)
        res.status(200).send({
            message: "Insert New Expense",
            data: response.data,
        });
    } catch (err) {
      next(err);
    }
}

async function UpdateExistingExpense(req: Request, res: Response, next: NextFunction) {
    try {
        const { id } = req.params;
        const { title, nominal, type, category, date } = req.body;
        const payload = {
            title, nominal, type, category, date
        }
        const response = await axios.put(`${API_URL}/${id}`, payload)
        res.status(200).send({
            message: "Update Expense",
            data: response.data,
        });
    } catch (err) {
      next(err);
    }
}

async function DeleteExpense(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
  
      const response = await axios.delete(`${API_URL}/${id}`)
      res.status(200).send({
          message: `Delete Expense Detail id : ${id}`,
          data: response.data,
        });
    } catch (err) {
      next(err);
    }
  }

export { GetExpenseList, GetExpenseDetail, CreateNewExpense, UpdateExistingExpense, DeleteExpense};