import ModalContext from '../context';
import {useContext} from 'react';

export default function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('No provider Modal Success ');
  }
  return context;
}
