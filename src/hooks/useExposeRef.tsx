import { ForwardedRef, RefObject, useImperativeHandle } from 'react';

/**
 * Expose a component's local ref to Forwarded Ref as a 'node' property.
 * Typically only used in library components that require both local ref and support forwardRef.
 * @param forwardedRef ForwardRef from parent component
 * @param internalRef Local Ref to be synced with parent compoonent
 */
const useExposeRef = (
  forwardedRef: ForwardedRef<unknown>,
  internalRef: RefObject<unknown>,
): void => {
  useImperativeHandle(forwardedRef, () => ({
    node: internalRef?.current,
  }), [internalRef]);
};

export default useExposeRef;
