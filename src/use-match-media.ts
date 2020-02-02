import { useLayoutEffect, useState } from 'react'

function useMatchMedia (queries: Array<string>, defaultValues = []): Array<boolean> {
  const initialValues = defaultValues.length
    ? defaultValues
    : Array(queries.length).fill(false)

  if (typeof window === 'undefined') return initialValues

  const mediaQueryLists = queries.map(q => window.matchMedia(q))
  const getValue = () => {
    // Return the value for the given queries
    const matchedQueries = mediaQueryLists.map(mql => mql.matches)

    return matchedQueries
  }

  // State and setter for matched value
  const [value, setValue] = useState(getValue)

  useLayoutEffect(() => {
    // Event listener callback
    // Note: By defining getValue outside of useEffect we ensure that it has ...
    // ... current values of hook args (as this hook only runs on mount/dismount).
    const handler = () => setValue(getValue)
    // Set a listener for each media query with above handler as callback.
    mediaQueryLists.forEach(mql => mql.addListener(handler))
    // Remove listeners on cleanup
    return () => mediaQueryLists.forEach(mql => mql.removeListener(handler))
  }, [])

  return value
}

export default useMatchMedia
