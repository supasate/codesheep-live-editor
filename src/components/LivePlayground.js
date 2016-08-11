import React, { Component } from 'react'
import LiveEditor from './LiveEditor'
import LivePreview from './LivePreview'

class LivePlayground extends Component {
  render() {
    return (
      <div className="live-playground">
        <LiveEditor code="" />
        <LivePreview code="" />
      </div>
    )
  }
}

export default LivePlayground
