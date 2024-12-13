import { ReactNode } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export type ModalProps = {
  children?: ReactNode;
  onClose?: VoidFunction;
  title?: string;
};

export function Modal({ children, title, onClose }: ModalProps) {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center">
      <div className="bg-foreground text-background rounded-lg w-1/2 h-1/2 mb-48 animate-appear p-6 flex flex-col items-stretch">
        <div className="flex justify-between items-center mb-2">
          <span className="font-bold text-lg">{title}</span>
          <button onClick={onClose}>
            <XMarkIcon className="text-background size-5" />
          </button>
        </div>
        <div className="overflow-y-auto h-full">{children}</div>
      </div>
    </div>
  );
}
