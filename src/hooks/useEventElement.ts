import { useState, MouseEvent } from 'react';

import { BindingAction, BindingCallback1 } from '@models/functions';

const useEventElement = <T = HTMLElement>(): {
  element: null | T;
  handleClick: BindingCallback1<MouseEvent<T>>;
  handleClose: BindingAction;
} => {
  const [element, setElement] = useState<null | T>(null);

  const handleClick = (event: MouseEvent<T>) => setElement(event.currentTarget);
  const handleClose = () => setElement(null);

  return { element, handleClick, handleClose };
};

export default useEventElement;
