# useMatchMedia

<!-- Brief summary of what the component is, and what it's for. -->

<!-- STORY -->

#### Story Source

<!-- SOURCE -->
``` js
import useMatchMedia from 'use-match-media'

const Component = () => {
  const [isTablet, isTabletLandscape] = useMatchMedia(['(min-width: 768px)', '(min-width: 900px)'])

  if (isTabletLandscape) return <Wrapper>Is more than 900px</Wrapper>
  if (isTablet) return <Wrapper>Between 768px and 900px</Wrapper>

  return <Wrapper>is below 768px</Wrapper>
}
```

