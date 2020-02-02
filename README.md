# use-match-media
useMatchMedia react hook for responsive components.

There are cases that is needed to set conditions outside the render/return of the component. For that another way to set a condition depending on the media query, is using a hook.

### Installation

1. Install `yarn add use-match-media` or `npm i --save use-match-media`

### Arguments
- queries <Array>: array of media queries following [the spec](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia).
- defaultValues <Array>: default values in case you want to control SSR default value, defaults to `false`

### Usage

#### Common usage:

``` jsx
import useMatchMedia from 'use-match-media'

const queries = [
  '(max-width: 400px)',
  '(min-width: 800px)'
]

const Component = () => {
  const [mobile, desktop] = useMatchMedia(queries)

  if(mobile) return <MobileComponent />

  return desktop ? <ComponentOne /> : <ComponentTwo />
}
```

#### Desktop first strategy
The following example will render true in the server (if window doesn't exists).

``` jsx
import useMatchMedia from 'use-match-media'

const queries = [
  '(min-width: 600px)'
]

const Component = () => {
  const [desktop] = useMatchMedia(queries, [true])

  return desktop ? <ComponentOne /> : <ComponentTwo />
}
```
