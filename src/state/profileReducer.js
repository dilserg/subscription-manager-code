const UPDATE_PROFILE = 'UPDATE_PROFILE';

const initialState = {
  name: 'dilserg',
  photo: null,
  totalIncome: 500,
  wantToSpend: 500,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PROFILE:
      return {
        ...state,
        name: action.name,
        totalIncome: action.totalIncome,
        wantToSpend: action.wantToSpend,
      };
    default:
      return state;
  }
};

export const updateProfileAC = (name, totalIncome, wantToSpend) => ({
  type: UPDATE_PROFILE,
  name,
  totalIncome,
  wantToSpend,
});

export default profileReducer;
