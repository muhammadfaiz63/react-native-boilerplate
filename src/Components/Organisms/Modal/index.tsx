import React, {useMemo} from 'react';

import {Modal as MuiModal} from '@ui-kitten/components';
import useModalContext from './Hooks/UseModalContext';
import {StyleSheet} from 'react-native';

import ModalSuccessContext from './context';
import Success from './fragments/Success';
import Loading from './fragments/Loading';
import Error from './fragments/Error';
import * as Animatable from 'react-native-animatable';

interface indexProps {}
const fadeIn = {
  from: {opacity: 0},
  to: {opacity: 1},
};

interface IBody {
  [key: string]: () => JSX.Element | null;
}
const Body: IBody = {
  SUCCESS: () => (
    <Animatable.View animation={fadeIn}>
      <Success />
    </Animatable.View>
  ),
  LOADING: () => <Loading />,
  ERROR: () => (
    <Animatable.View animation={fadeIn}>
      <Error />
    </Animatable.View>
  ),
  TRANSITION: () => null,
};

const Modal: React.FunctionComponent<indexProps> = (props) => {
  const {isOpen, handleClose, handleOpen, modalType} = useModalContext();
  const ModalBody = useMemo(() => Body[modalType], [modalType]);

  return (
    <ModalSuccessContext.Provider
      value={{isOpen, handleClose, handleOpen, modalType}}>
      {props.children}
      <MuiModal visible={isOpen} backdropStyle={styles.backdrop}>
        <ModalBody />
      </MuiModal>
    </ModalSuccessContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 192,
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

export function withModal(
  Component: React.FunctionComponent<any>,
): React.FunctionComponent<any> {
  return (props) => {
    return (
      <Modal>
        <Component {...props}>{props.children}</Component>
      </Modal>
    );
  };
}

export default Modal;
