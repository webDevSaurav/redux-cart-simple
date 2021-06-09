import { uiActions } from "./ui";
import { cartActions } from "./cart";
//thunk --> outside the slice
//return other function
export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending",
        message: "Sending cart data...",
      })
    );
    console.log(cart);
    const sendRequest = async () => {
      const response = await fetch(
        "https://react-movies-55a43-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalAmount: cart.totalAmount,
            totalQty: cart.totalQty,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Error in fetching");
      }
    };

    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success",
          message: "Success in sending data",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: "Error in sending data. " + error,
        })
      );
    }
  };
};

export const fetchCartData = () => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(
        "https://react-movies-55a43-default-rtdb.firebaseio.com/cart.json"
      );
      if (!response.ok) {
        throw new Error("Error in fetching");
      }
      const data = response.json();
      return data;
    };
    try {
      const cartData = await sendRequest();
      dispatch(cartActions.replaceCart(cartData));
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: "Error in feching data. " + error,
        })
      );
    }
  };
};
