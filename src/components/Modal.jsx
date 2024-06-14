import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ onClose, isOpen, children }) => {
  return createPortal(
    <>
      {isOpen && (
        <div  className="grid place-items-center backdrop-blur h-screen w-screen absolute top-0 z-40">
          <div  className="m-auto z-50 relative min-h-[200px] min-w-[60%] bg-white p-3 mt-[30vh]">
            <div className="flex justify-end">
              <AiOutlineClose onClick={onClose} className="text-2xl self-end cursor-pointer" />
            </div>

            {children}
          </div>
        </div>
        
      )}
      
    </>,
    document.getElementById("modal-root")
  );
};

export default Modal;
