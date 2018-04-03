define(['uiComponent', 'ko', 'square'], function (Component, ko, Square) {
    'use strict';
    
    return Component.extend({
        defaults: {
            template: 'VinaiKopp_TicTacToe/board'
        },
        cells: [],
        initContainer: function (game) {
            this.cells = [...game.squares.keys()].map(function (i) {
                return new Square({index: i, game: game});
            });
            return this._super(game);
        }
    });
});
