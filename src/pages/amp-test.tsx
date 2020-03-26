import React from 'react'
import AmpTemplate from '../view/amp-test/amp-template'
class AmpTest extends React.Component<any, any> {
  render() {
    return <AmpTemplate />
  }
}

export const config = {
  amp: true,
}

export default AmpTest
