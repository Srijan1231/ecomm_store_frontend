import toast from "react-hot-toast";
// import { setOrders } from "../../redux/order/orderSlice";
import { postOrder } from "../../util/axiosHelper/axiosHelper";

export const postOrderItem = async (details) => {
  console.log(details);
  const { status } = await postOrder(details);
  if (status === "success") {
    toast.success("Details sent to dispatch");
  }
};
