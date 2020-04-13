import React, { ReactElement } from 'react'
import { storiesOf } from '@storybook/react'

import useMatchMedia from './use-match-media'
import Docs from './README.md'

const Wrapper = ({ children }) => {
  return (<div style={{ fontFamily: 'sans-serif', padding: '24px' }}>
    { children }
  </div>)
}

const mobileFirst = (): ReactElement => {
  const [isDesktop] = useMatchMedia(['(min-width: 768px)'])
  return (
    <Wrapper>
      <h1>{isDesktop ? 'is above 768px' : 'is below 768px'}</h1>
    </Wrapper>
  )
}

const desktopFirst = (): ReactElement => {
  const [isDesktop] = useMatchMedia(['(max-width: 768px)'])
  return (
    <Wrapper>
      <h1>{isDesktop ? 'is below 768px' : 'is above 768px'}</h1>
    </Wrapper>
  )
}

const moreMediaQueries = (): ReactElement => {
  const [isTablet, isTabletLandscape] = useMatchMedia(['(min-width: 768px)', '(min-width: 900px)'])

  if (isTabletLandscape) return <Wrapper>Is more than 900px</Wrapper>
  if (isTablet) return <Wrapper>Between 768px and 900px</Wrapper>

  return <Wrapper>is below 768px</Wrapper>
}

storiesOf('Match Media', module)
  .addParameters({
    readme: {
      // Show readme before story
      content: Docs
    }
  })
  .add('Mobile First', mobileFirst)
  .add('Desktop First', desktopFirst)
  .add('More queries', moreMediaQueries)
