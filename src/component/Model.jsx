import { X } from "lucide-react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="bg-gray-200/50 flex justify-center items-center inset-0 fixed min-h-screen">
      <div className="w-[300px] md:w-[450px] bg-gray-500/50 relative px-10 pt-5 rounded-md shadow-xl">
        <X color="#000" className="absolute top-2 right-2" onClick={onClose} />
        {children}
      </div>
    </div>
  );
};

export default Modal;
