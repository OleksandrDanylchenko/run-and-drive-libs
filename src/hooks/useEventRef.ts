import { useState, MouseEvent } from 'react';

import { BindingAction, BindingCallback1 } from '@models/functions';

const useEventRef = <T = HTMLElement>(): {
  ref: null | T;
  handleClick: BindingCallback1<MouseEvent<T>>;
  handleClose: BindingAction;
} => {
  const [element, setElement] = useState<null | T>(null);

  const handleClick = (event: MouseEvent<T>) => setElement(event.currentTarget);
  const handleClose = () => setElement(null);

  return { ref: element, handleClick, handleClose };
};

export default useEventRef;
