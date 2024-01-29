import { useStore } from "@nanostores/react";
import { ToastContainer, Toast as BootstrapToast } from "react-bootstrap";
import { toasts, type IToast } from "../../stores/ui";

const Toast = () => {
  const $toasts = useStore(toasts);

  const onClose = (toast:IToast) => {
    const toastToClose = $toasts.find((ts) => ts == toast);
    toastToClose!.show = false;
    toasts.set([...$toasts]);
  }

  return (
    <ToastContainer position="top-end">
      {
        $toasts.map((toast, idx) => {
          return (
            <BootstrapToast onClose={(e)=>onClose(toast)} key={idx} bg={toast.bg} show={toast.show} delay={toast.delay} autohide>
              <BootstrapToast.Body>{toast.message}</BootstrapToast.Body>
            </BootstrapToast>
          )
        })
      }
    </ToastContainer>
  );
};
export default Toast;
