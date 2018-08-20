import { Scene } from 'phaser'

export class TestScene extends Scene {
  preload () {
    //
  }

  create () {
    this.add.text(100, 100, 'Phaser Text', { fill: '#0f0' })
  }
}
