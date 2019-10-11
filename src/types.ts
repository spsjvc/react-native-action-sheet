import * as React from 'react';
import { TextStyle, ViewStyle } from 'react-native';

// for iOS
export interface ActionSheetIOSOptions {
  options: string[];
  title?: string;
  message?: string;
  tintColor?: string;
  destructiveButtonIndex?: number;
}

// for Android or Web
export interface ActionSheetOptions extends ActionSheetIOSOptions {
  icons?: React.ReactNode[];
  iconsStyle?: object;
  tintIcons?: boolean;
  textStyle?: TextStyle;
  titleTextStyle?: TextStyle;
  titleContainerStyle?: object;
  messageTextStyle?: TextStyle;
  showSeparators?: boolean;
  separatorStyle?: ViewStyle;
  containerStyle?: object;
}
