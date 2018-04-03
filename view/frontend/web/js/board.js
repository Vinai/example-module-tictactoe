define(['uiComponent', 'square'], function (Component, Square) {
    'use strict';
    
    return Component.extend({
        defaults: {
            template: 'VinaiKopp_TicTacToe/board'
        },
        cells: [],
        initContainer: function (parent) {
            const state = parent.state;
            this.cells = [...state.squares.keys()].map(function (i) {
                return new Square({index: i, state: state});
            });
            return this._super(parent);
        }
    });
});
