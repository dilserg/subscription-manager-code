import {combineReducers, createStore} from 'redux';
import subscriptionsReducer from "./SubscriptionsReducer";
import profileReducer from "./profileReducer"

let reducers = combineReducers({
  subscriptions:subscriptionsReducer,
  profile:profileReducer
});

const store = createStore(reducers)

export default store;
