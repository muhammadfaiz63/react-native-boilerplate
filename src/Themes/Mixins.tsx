import * as reactNative from 'react-native';
const WINDOW_WIDTH = reactNative.Dimensions.get('window').width;
const guidelineBaseWidth = 375;

export const scaleSize = (size: number) =>
  (WINDOW_WIDTH / guidelineBaseWidth) * size;

export const scaleFont = (size: number) =>
  size * reactNative.PixelRatio.getFontScale();

export interface Dimensions {
  top: any;
  bottom: any;
  right: any;
  left: any;
  property: string;
}

function dimensions(
  top: any,
  right = top,
  bottom = top,
  left = right,
  property: string,
) {
  let styles: any = {};
  styles[`${property}Top`] = top;
  styles[`${property}Right`] = right;
  styles[`${property}Bottom`] = bottom;
  styles[`${property}Left`] = left;

  return styles;
}

export function margin(top: any, right: any, bottom: any, left: any) {
  return dimensions(top, right, bottom, left, 'margin');
}

export function padding(top: any, right: any, bottom: any, left: any) {
  return dimensions(top, right, bottom, left, 'padding');
}

export function boxShadow(
  color: any,
  offset = {height: 2, width: 2},
  radius = 8,
  opacity = 0.2,
) {
  return {
    shadowColor: color,
    shadowOffset: offset,
    shadowOpacity: opacity,
    shadowRadius: radius,
    elevation: radius,
  };
}
