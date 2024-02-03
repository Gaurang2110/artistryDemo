import {ALL_PRODUCT, DECREASE_QTY, INCRESE_QTY} from '../action/home';

const productReducer = (initalState = [], actions) => {
  const {payload, type} = actions;

  switch (type) {
    case ALL_PRODUCT:
      console.log('payload was....',payload)
      return [...initalState, payload];

    case INCRESE_QTY: {
      let index = -1;
      console.log('payload was././//',payload)
      initalState.map((item, id) => {
        if (item.id == payload) {
          index = id;
        }
      });
      if (index == -1) {
      } else {
        initalState[index].qty = initalState[index].qty + 1;
      }
      return [...initalState];

    }

    case DECREASE_QTY: {
      let index = -1;
      initalState.map((item, id) => {
        if (item.id == payload) {
          index = id;
        }
      });
      if (index == -1) {
      } else {
        initalState[index].qty = initalState[index].qty - 1;
      }
      return [...initalState];
    }

    default:
      return initalState;
  }
};

export default productReducer;
