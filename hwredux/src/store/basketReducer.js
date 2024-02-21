export const defaultState = [
  { id: 1, title: "Велосипед", count: 5 },
  { id: 2, title: "Самокат", count: 4 },
  { id: 3, title: "Гантели", count: 7 },
  { id: 4, title: "Ракетки", count: 1 },
];

const ADD_ITEM = "ADD_ITEM";
const REM_ITEM = "REM_ITEM";
const ADD_NEW_PRODUCT = "ADD_NEW_PRODUCT";

export const basketReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return state.map((item) =>
        item.id === action.payload.id
          ? {
              ...item,
              count: item.count === 25 ? item.count + 0 : item.count + 1,
            }
          : item
      );

    case REM_ITEM:
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, count: item.count === 0 ? item.count : item.count - 1 }
          : item
      );

    case ADD_NEW_PRODUCT:
      let new_product = {
        id: Date.now(),
        title: action.payload,
        count: 1,
      };
      return [...state, new_product];

    default:
      return state;
  }
};

export const addItemAction = (id) => ({ type: ADD_ITEM, payload: { id } });
export const remItemAction = (id) => ({ type: REM_ITEM, payload: { id } });
export const addNewProductAction = (payload) => ({
  type: ADD_NEW_PRODUCT,
  payload,
});
