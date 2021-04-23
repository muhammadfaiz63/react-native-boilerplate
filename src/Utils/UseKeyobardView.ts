import {useRef} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export default function useKeyboardView() {
  const scrollView: React.RefObject<KeyboardAwareScrollView> | null = useRef<
    KeyboardAwareScrollView
  >(null);

  const scrollToFocusedInput = (event: any) => {
    scrollView.current?.scrollToFocusedInput(event.target as any, 200, 200);
  };

  return {scrollView, scrollToFocusedInput};
}
