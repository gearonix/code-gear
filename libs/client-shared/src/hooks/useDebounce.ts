import { useRef } from 'react'

type Timeout = ReturnType<typeof setTimeout>

export const useDebounce = <T>(callback: (...args: T[]) => void, delay: number) => {
  const debounceRef = useRef<Timeout>()

  return (...args: T[]) => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current)
    }
    debounceRef.current = setTimeout(() => {
      callback(...args)
    }, delay)
  }
}
