import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { expenseReducer } from '../reducers/expenses';
import { appActions } from '../types/actions';

export const rootReducer = combineReducers({
  expenses: expenseReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk as ThunkMiddleware<AppState, appActions>)
);
