import * as React from 'react';
import { ActionSheetOptions } from './types';

export interface Context {
  showActionSheetWithOptions: (options: ActionSheetOptions, callback: (i: number) => void) => void;
  hideActionSheet: () => void;
}

const context = React.createContext<Context>({
  showActionSheetWithOptions: (options: ActionSheetOptions, callback: (i: number) => void) => {},
  hideActionSheet: () => {},
});

export function useActionSheet() {
  return React.useContext(context);
}

const { Provider, Consumer } = context;

export { Provider, Consumer };
