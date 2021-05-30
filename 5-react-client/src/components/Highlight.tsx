import React, { Component } from 'react'

import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'

const registeredLanguages: any = {}

interface IHightlightState {
  loaded: boolean
}

interface IHighlightProps {
  language: string
}

class Highlight extends Component<IHighlightProps, IHightlightState> {
  private codeNode: any

  constructor(props: any) {
    super(props)

    this.state = { loaded: false }
    this.codeNode = React.createRef()
  }

  componentDidMount() {
    const { language } = this.props

    if (language && !registeredLanguages[language]) {
      try {
        const newLanguage = require(`highlight.js/lib/languages/${language}`)
        hljs.registerLanguage(language, newLanguage)
        registeredLanguages[language] = true

        this.setState({ loaded: true }, this.highlight)
      } catch (e) {
        console.error(e)
        throw Error(`Cannot register the language ${language}`)
      }
    } else {
      this.setState({ loaded: true })
    }
  }

  componentDidUpdate() {
    this.highlight()
  }

  highlight = () => {
    this.codeNode && this.codeNode.current && hljs.highlightBlock(this.codeNode.current)
  }

  render() {
    const { language, children } = this.props
    const { loaded } = this.state

    if (!loaded) {
      return null
    }

    return (
      <pre className="rounded">
        <code ref={this.codeNode} className={language}>
          {children}
        </code>
      </pre>
    )
  }
}

export default Highlight
