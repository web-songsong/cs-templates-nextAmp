import React from 'react'
import * as Amp from 'react-amphtml'
import * as AmpHelpers from 'react-amphtml/helpers'
import styles from './index.module.scss'

let AmpScript = ({ ...props }: any) => <Amp.AmpScript {...props} />
const defaultHeading = {
  text: 'Hello, World!',
}
class AmpTemplate extends React.Component<any, any> {
  render() {
    return (
      <>
        <style jsx>{styles}</style>
        <AmpScript src="/static/amp-js/test-event.js" height={300}>
          <Amp.AmpState specName="amp-state" id="heading">
            {defaultHeading}
          </Amp.AmpState>
          <AmpHelpers.Bind text="heading.text">
            {props => <h1 {...props}>{defaultHeading.text}</h1>}
          </AmpHelpers.Bind>
          <Amp.AmpState specName="amp-state" id="headingInput">
            {defaultHeading}
          </Amp.AmpState>
          改变标题（change触发）:
          <AmpHelpers.Action
            events={{
              change: ['AMP.setState({ heading: { text: event.value } })'],
            }}>
            {props => {
              return <input {...props} type="text" id="headingInputElement" />
            }}
          </AmpHelpers.Action>
          <div className={'test'}>
            <div id="testScript" />
          </div>
        </AmpScript>
      </>
    )
  }
}

export const config = {
  amp: true,
}
export default AmpTemplate
