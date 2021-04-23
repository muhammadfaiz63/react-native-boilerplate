import React from 'react';

interface IModal {
  isOpen: boolean;
  handleOpen: (type?: ModalType) => void;
  handleClose: (duration?: number) => Promise<any>;
  modalType: ModalType;
}

export type ModalType = 'SUCCESS' | 'LOADING' | 'ERROR' | 'TRANSACTION';

const ModalContext = React.createContext<IModal>({} as IModal);

export default ModalContext;
