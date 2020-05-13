import { Expense } from './expense';

export const ADD_EXPENSE = 'ADD_EXPENSE';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';
export const REMOVE_EXPENSE = 'REMOVE_EXPENSE';
export const SET_EXPENSES = 'SET_EXPENSES';

export interface SetExpensesAction {
  type: typeof SET_EXPENSES;
  expenses: Expense[];
}

export interface EditExpenseAction {
  type: typeof EDIT_EXPENSE;
  expense: Expense;
}

export interface RemoveExpenseAction {
  type: typeof REMOVE_EXPENSE;
  id: string;
}

export interface AddExpenseAction {
  type: typeof ADD_EXPENSE;
  expense: Expense;
}

export type ExpenseActionTypes =
  | SetExpensesAction
  | EditExpenseAction
  | RemoveExpenseAction
  | AddExpenseAction;

export type appActions = ExpenseActionTypes;
