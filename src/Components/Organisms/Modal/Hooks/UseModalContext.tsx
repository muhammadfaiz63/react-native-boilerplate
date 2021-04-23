import {useState, useCallback} from 'react';
import {ModalType} from '../context';
import {showMessage} from 'react-native-flash-message';

export default function useModalContext() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState<ModalType>('SUCCESS');

  function handleClose(duration?: number) {
    return new Promise((resolve) => {
      setTimeout(() => {
        setIsOpen(false);
        setModalType('LOADING');
        resolve({});
      }, duration || 500);
    });
  }

  const handleOpen = useCallback(async (type?: ModalType) => {
    type = type || 'SUCCESS';

    if (type === 'SUCCESS') {
      showMessage({
        message: 'Success',
        type: 'success',
        icon: 'danger',
      });
    } else if (type === 'ERROR') {
      showMessage({
        message: 'Error',
        icon: 'danger',
        type: 'danger',
      });
    } else if (type === 'LOADING') {
      setModalType('LOADING');
      setIsOpen(true);
    }
  }, []);

  return {isOpen, handleOpen, handleClose, modalType};
}
