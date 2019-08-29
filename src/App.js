import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'
import NumberSearch from './components/NumberSearch'
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <NumberSearch />
      </>
    )
  }
}

export default App
