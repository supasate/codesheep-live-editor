import React, { Component, PropTypes } from 'react'
import CodeMirror from 'react-codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/monokai.css'

require('codemirror/mode/jsx/jsx')

class LiveEditor extends Component {
  constructor(props) {
    super(props)
    this.handleCodeChange = this.handleCodeChange.bind(this)
  }

  handleCodeChange(code) {
    this.props.updateCode(this.props.editorId, code)
  }

  render() {
    const options = {
      mode: 'jsx',
      lineWrapping: true,
      smartIndent: true,
      matchBrackets: true,
      theme: 'monokai',
      readOnly: false,
      lineNumbers: true,
      tabSize: 2,
      indentUnit: 2,
    }

    return (
      <div className="live-editor">
        <CodeMirror
          ref={(ref) => { this.wrapper = ref }}
          className="codemirror"
          external="true"
          options={options}
          value={this.props.code}
          onChange={this.handleCodeChange}
        />
      </div>
    )
  }
}

LiveEditor.propTypes = {
  editorId: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  updateCode: PropTypes.func.isRequired,
}

LiveEditor.defaultProps = {
  code: '',
}

export default LiveEditor
