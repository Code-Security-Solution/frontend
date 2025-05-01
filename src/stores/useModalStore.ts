import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

export type ModalType = 'alert' | 'content';

interface ModalData {
  content: React.ReactNode;
}

type ModalState = {
  modal: { [K in ModalType]?: ModalData };
};

interface ModalActions {
  openModal: (type: ModalType, content: React.ReactNode) => void;
  closeModal: (type: ModalType) => void;
  closeAllModal: () => void;
}

export const useModalStore = create<ModalState & ModalActions>()(
  immer((set) => ({
    modal: {},
    openModal: (type, content) => {
      set((state) => {
        state.modal[type] = {
          content,
        };
      });
    },
    closeModal: (type) => {
      set((state) => {
        if (state.modal[type]) {
          delete state.modal[type];
        }
      });
    },
    closeAllModal: () => set({ modal: {} }),
  })),
);

export default useModalStore;
