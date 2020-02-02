import { renderHook, act } from '@testing-library/react-hooks'

import useMatchMedia from './use-match-media'

describe('useMatchMedia', () => {
  it('should return true for the media queries that match the condition', () => {
    act(() => {
      window.resizeTo(460, 300)
    })

    const { result } = renderHook(() =>
      useMatchMedia(['(min-width: 400px)', '(min-width: 800px)'])
    )
    const [mediumMq, largeMq] = result.current

    expect(mediumMq).toBe(true)
    expect(largeMq).toBe(false)

    act(() => {
      window.resizeTo(860, 300)
    })

    const [mediumMqUpdated, largeMqUpdated] = result.current

    expect(mediumMqUpdated).toBe(true)
    expect(largeMqUpdated).toBe(true)
  })
})
