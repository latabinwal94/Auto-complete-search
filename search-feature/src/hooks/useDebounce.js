import { useEffect, useState } from "react"

const useDebounce = (val, offset=500) => {
  const [debounceInput, setDebouncedInput] = useState(val)

  useEffect(() => {
    const timeRef = setTimeout(() => {
      setDebouncedInput(val)
    }, offset)
    return () => {
      clearTimeout(timeRef)
    }
  },[offset, val])

  return debounceInput
}

export default useDebounce