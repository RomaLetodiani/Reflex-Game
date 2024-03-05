import { useRef, useEffect, MutableRefObject } from 'react'

/**
 * Calls a function when clicked inside the specified element.
 * Useful for scenarios like handling clicks inside modal or pop-up elements.
 * @param elementRef Ref object containing the target element.
 * @param callback Callback function to be invoked when clicked inside the element.
 */
const useClickInside = (
  elementRef: MutableRefObject<HTMLElement | null>,
  callback: () => void,
): void => {
  const callbackRef = useRef(callback)

  useEffect(() => {
    const handleClickInside = (event: MouseEvent) => {
      event.preventDefault()
      if (
        elementRef.current &&
        event.target instanceof Node &&
        elementRef.current.contains(event.target)
      ) {
        callbackRef.current()
      }
    }

    document.addEventListener('click', handleClickInside, true)

    return () => {
      document.removeEventListener('click', handleClickInside, true)
    }
  }, [elementRef, callbackRef])
}

export default useClickInside
