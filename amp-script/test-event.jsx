import { h, render } from 'preact'
import React from 'preact/compat'

const TestApp = () => (
  <div
    onClick={() => {
      console.log('test click')
    }}>
    test click
  </div>
)
render(h(TestApp), document.getElementById('testScript'))
