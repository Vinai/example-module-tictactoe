define(['uiComponent', 'ticTacToeState', 'square'], function (Component, state, Square) {
    'use strict';
    
    return Component.extend({
        defaults: {
            template: 'VinaiKopp_TicTacToe/board'
        },
        cells: [],
        initialize: function () {
            this.cells = [...state.squares.keys()].map(function (i) {
                return new Square({index: i});
            });
            return this._super();
        }
    });
});
