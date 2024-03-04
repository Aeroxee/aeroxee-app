import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export default function Modal({ open, onClose, children }: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 overflow-y-auto z-[1000000]">
      <div className="flex items-center justify-center min-h-screen">
        <div className="fixed inset-0 bg-black opacity-50"></div>
        <div className="bg-black/80 border border-gray-700 p-6 rounded-lg z-10 w-[96%] lg:w-[40%] relative">
          {children}
          <button
            onClick={onClose}
            className="mt-4 p-2 text-white absolute top-1 right-3"
          >
            <FontAwesomeIcon icon={faX} />
          </button>
        </div>
      </div>
    </div>
  );
}
