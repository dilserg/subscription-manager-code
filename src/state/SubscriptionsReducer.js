const ADD_SUB = 'ADD_SUB';
const REMOVE_SUB = 'REMOVE_SUB';
const EDIT_SUB = 'EDIT_SUB';

const initialState = {
  subscriptions: [
    { id: 0, title: 'Netflix', price: 15, day: 15 },
    { id: 1, title: 'Youtube', price: 5, day: 1 },
    { id: 2, title: 'Spotify', price: 8, day: 1 },
    { id: 3, title: 'Netflix', price: 15, day: 15 },
    { id: 4, title: 'Youtube', price: 5, day: 1 },
    { id: 5, title: 'Spotify', price: 8, day: 1 },
    { id: 6, title: 'Netflix', price: 15, day: 15 },
    { id: 7, title: 'Youtube', price: 5, day: 1 },
    { id: 8, title: 'Spotify', price: 8, day: 1 },
    { id: 9, title: 'Netflix', price: 15, day: 15 },
    { id: 10, title: 'Youtube', price: 5, day: 1 },
    { id: 11, title: 'Spotify', price: 8, day: 1 },
    { id: 12, title: 'Netflix', price: 15, day: 15 },
    { id: 13, title: 'Youtube', price: 5, day: 1 },
    { id: 14, title: 'Spotify', price: 8, day: 1 },
    { id: 15, title: 'Netflix', price: 15, day: 15 },
    { id: 16, title: 'Youtube', price: 5, day: 1 },
    { id: 17, title: 'Spotify', price: 8, day: 1 },
    { id: 18, title: 'Netflix', price: 15, day: 15 },
    { id: 19, title: 'Youtube', price: 5, day: 1 },
    { id: 20, title: 'Spotify', price: 8, day: 1 },
    { id: 21, title: 'Netflix', price: 15, day: 15 },
    { id: 22, title: 'Youtube', price: 5, day: 1 },
    { id: 23, title: 'Spotify', price: 8, day: 1 },
    { id: 24, title: 'Netflix', price: 15, day: 15 },
    { id: 25, title: 'Youtube', price: 5, day: 1 },
    { id: 26, title: 'Spotify', price: 8, day: 1 },
    { id: 27, title: 'Netflix', price: 15, day: 15 },
    { id: 28, title: 'Youtube', price: 5, day: 1 },
    { id: 29, title: 'Spotify', price: 8, day: 1 },
  ],
  totalPrice: 280,
  nextID: 30,
};

const subscriptionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SUB:
      return {
        ...state,
        nextID: state.nextID + 1,
        totalPrice: state.totalPrice + Number(action.price),
        subscriptions: [
          {
            title: action.title,
            price: action.price,
            day: action.day,
            id: state.nextID,
          },
          ...state.subscriptions,
        ],
      };

    case REMOVE_SUB:
      let price;
      for (let i = 0; i < state.subscriptions.length; i++) {
        if (state.subscriptions[i].id === action.id) {
          price = state.subscriptions[i].price;
          break;
        }
      }
      return {
        ...state,
        totalPrice: state.totalPrice - price,
        subscriptions: state.subscriptions.filter(
          (sub) => sub.id !== action.id
        ),
      };

    case EDIT_SUB:
      const obj = state.subscriptions.find((s) => s.id === action.id);
      const index = state.subscriptions.indexOf(obj);
      const difference = action.price - obj.price;
      const subs = [
        ...state.subscriptions.slice(0, index),
        {
          id: action.id,
          title: action.title,
          price: action.price,
          day: action.day,
        },
        ...state.subscriptions.slice(index + 1),
      ];
      return {
        ...state,
        totalPrice: state.totalPrice + difference,
        subscriptions: subs,
      };

    default:
      return state;
  }
};

export const addSubAC = (title, price, day) => ({
  type: ADD_SUB,
  title,
  price,
  day,
});

export const removeSubAC = (id) => ({ type: REMOVE_SUB, id });

export const editSubAC = (id, title, price, day) => ({
  type: EDIT_SUB,
  id,
  title,
  price,
  day,
});

export default subscriptionsReducer;
