const ReactModal = require("react-modal");
import { Icon } from "@shopify/polaris";
import { XIcon } from "@shopify/polaris-icons";
import { Button } from "antd";

const Modal = ({ children, open, onClose, primaryAction }) => {
  return (
    <ReactModal
      isOpen={!!open}
      onRequestClose={onClose}
      ariaHideApp={false}
      className="modal"
      overlayClassName="overlay"
    >
      <div
        className="absolute top-2 right-2 w-10 h-10 cursor-pointer"
        onClick={onClose}
      >
        <Icon source={XIcon} tone="base" />
      </div>
      {children}
      {primaryAction && (
        <div className="mt-4 text-center">
          <Button type="primary" onClick={primaryAction.onAction}>
            {primaryAction.content}
          </Button>
        </div>
      )}
    </ReactModal>
  );
};

export default Modal;
