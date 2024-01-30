const initialState = {
  allCarDetails: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "UPDATE":
      const objUpdate = [...state.allCarDetails];
      objUpdate.push(action.payload);
      console.log("____________");
      console.log(objUpdate);
      console.log("____________");
      return {
        ...state,
        allCarDetails: objUpdate,
      };
    default:
      return state;
  }
}
export default reducer;
