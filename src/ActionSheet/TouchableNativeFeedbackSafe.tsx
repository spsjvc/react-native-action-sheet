import * as React from 'react';
import {
  Platform,
  TouchableOpacity,
  TouchableWithoutFeedbackProps,
} from 'react-native';

class CustomTouchableOpacity extends TouchableOpacity {
  static SelectableBackground = () => ({});
  static SelectableBackgroundBorderless = () => ({});
  static Ripple = (color: string, borderless?: boolean) => ({});
}

const TouchableComponent = Platform.select({
  web: CustomTouchableOpacity,
  default: CustomTouchableOpacity,
});

type Props = TouchableWithoutFeedbackProps & {
  pressInDelay: number;
  background: any;
};

export default class TouchableNativeFeedbackSafe extends React.Component<Props> {
  static SelectableBackground = TouchableComponent.SelectableBackground;
  static SelectableBackgroundBorderless = TouchableComponent.SelectableBackgroundBorderless;
  static Ripple = TouchableComponent.Ripple;

  render() {
    // @ts-ignore: JSX element type 'TouchableComponent' does not have any construct or call signatures
    return <TouchableComponent {...this.props}>{this.props.children}</TouchableComponent>;
  }
}
