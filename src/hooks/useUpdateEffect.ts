import { DependencyList, EffectCallback, useEffect } from "react";
import useFirstMountState from "./useFirstMountState";

// Run an effect only on updates.
// 참고: https://github.com/streamich/react-use/blob/HEAD/docs/useUpdateEffect.md
const useUpdateEffect = (effect: EffectCallback, deps: DependencyList) => {
  const isFirstMount = useFirstMountState();
  useEffect(() => {
    if (!isFirstMount) {
      return effect();
    }
  }, deps);
};

export default useUpdateEffect;
