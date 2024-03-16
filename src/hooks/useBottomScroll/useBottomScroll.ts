import { useState, UIEventHandler } from "react";

export type ScrollEventHandler = UIEventHandler<HTMLDivElement>;

export interface BottomScrollInitialState {
  offsetBottom?: number;
}

export interface BottomScrollValue {
  endReached: boolean;
  handleScroll: ScrollEventHandler;
}

export const useBottomScroll = (
  initialState: BottomScrollInitialState
): BottomScrollValue => {
  const { offsetBottom = 10 } = initialState;
  const [endReached, setEndReached] = useState(false);

  const handleScroll: ScrollEventHandler = (event) => {
    const { target } = event;
    if (target) {
      const { scrollHeight, scrollTop, clientHeight } =
        target as HTMLInputElement;
      const limit = clientHeight + offsetBottom;
      const hasReachedBottom = scrollHeight - scrollTop <= limit;
      if (hasReachedBottom) {
        setTimeout(() => {
          setEndReached(hasReachedBottom);
        }, 400);
      } else {
        setEndReached(hasReachedBottom);
      }
    }
  };

  return { endReached, handleScroll };
};
