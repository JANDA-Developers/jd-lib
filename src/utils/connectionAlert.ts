import { toast } from "react-toastify";

const toastConnect = (connectMsg:string) => {
    toast.success(connectMsg);
  };
  
const toastUnConnect = (unConnectMsg:string) => {
    toast.warn(unConnectMsg);
  };


export const useConnectionToast = (connectMsg:string, unConnectMsg:string) => {
    const connectFn = toastConnect.bind(connectMsg);
    const unConnectFn = toastUnConnect.bind(unConnectMsg);

    const addEvents = () => {
        window.addEventListener("online", connectFn);
        window.addEventListener("offline", unConnectFn);
    }
    const removeEvent = () => {
        window.removeEventListener("online", connectFn);
        window.removeEventListener("offline", unConnectFn);
    }

    return { addEvents, removeEvent }
}
