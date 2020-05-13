import uuid from 'uuid';
import { Expense } from '../types/expense';
import { appActions } from '../types/actions';
import { AppState } from '../store/configureStore';

export const addExpense = (expense: Expense): appActions => ({
  type: 'ADD_EXPENSE',
  expense,
});

export const removeExpense = (id: string): appActions => ({
  type: 'REMOVE_EXPENSE',
  id,
});

export const editExpense = (expense: Expense): appActions => ({
  type: 'EDIT_EXPENSE',
  expense,
});

export const setExpenses = (expenses: Expense[]): appActions => ({
  type: 'SET_EXPENSES',
  expenses,
});

export const startAddExpense = (expenseData: {
  description: string;
  note: string;
  amount: number;
  createdAt: number;
}) => {
  return (dispatch: Dispatch<appActions>, getState: () => AppState) => {
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0,
    } = expenseData;
    const expense = { description, note, amount, createdAt };

    const id = uuid();

    dispatch(
      addExpense({
        id,
        ...expense,
      })
    );
  };
};

export const startRemoveExpense = (id: string) => {
  return (dispatch: Dospatch<appActions>, getState: () => AppState) => {
    dispatch(removeExpense(id));
  };
};

export const startEditExpense = (expense: Expense) => {
  return (dispatch: Dispatch<AppState>, getState: () => AppState) => {
    dispatch(editExpense(expense));
  };
};

export const startSetExpenses = (expenses: Expense[]) => {
  return (dispatch: Dispatch<appActions>, getState: () => AppState) => {
    dispatch(setExpenses(expenses));
  };
};
