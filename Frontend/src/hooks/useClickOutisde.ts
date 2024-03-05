import { useRef, useEffect, MutableRefObject } from 'react'

/**
 * Calls a function when clicked outside the specified element.
 * @param elementRef Ref object of the target element
 * @param callback Callback function to be invoked when clicked outside the element
 */
const useClickOutside = (
  elementRef: MutableRefObject<HTMLElement | null>,
  callback: () => void,
): void => {
  const callbackRef = useRef(callback)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      event.preventDefault()
      if (elementRef.current && !elementRef.current.contains(event.target as Node)) {
        callbackRef.current()
      }
    }

    document.addEventListener('click', handleClickOutside, true)

    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [elementRef, callbackRef])
}

export default useClickOutside
