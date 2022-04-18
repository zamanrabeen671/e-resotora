import { combineReducers, createStore } from "redux";
import FoodReducer from "./redux/reducers/FoodReducer";

// const initialState = {
//   auth: {},
//   foods: [],
// };

const rootReducers = combineReducers({
  Foods: FoodReducer,
});

const store = createStore(
  rootReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
