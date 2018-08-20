import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { AUTO, Game } from 'phaser'
import { TestScene } from './scenes/test-scene'

const gameConfig = {
  type: AUTO,
  width: 680,
  height: 400,
  scene: TestScene
}

ReactDOM.render(<App />, document.getElementById('app'))

const game = new Game(gameConfig)

console.log(game)
