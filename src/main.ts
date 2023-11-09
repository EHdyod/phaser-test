import Phaser from 'phaser';

import Scene_main from './Scene_main';

const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    parent: 'app',
    scale: {
        // Fit to window
        mode: Phaser.Scale.FIT,
        // Center vertically and horizontally
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    backgroundColor: '#4488aa',
    scene: [Scene_main],
    physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 450 },
		},
	},
}

export default new Phaser.Game(config);