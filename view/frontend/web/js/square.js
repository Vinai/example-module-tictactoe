define(['uiComponent', 'ticTacToeState'], function (Component, state) {
    'use strict';

    return Component.extend({
        defaults: {
            template: 'VinaiKopp_TicTacToe/square'
        },
        initConfig: function (options) {
            this._super(options);
            this.squareIndex = options.index;
            this.index = 'square' + options.index;
        },
        handleClick: function () {
            if ('' === this.value() && !state.winner) {
                state.squares[this.squareIndex](state.xIsNext ? 'X' : 'O');
            }
        },
        value: function () {
            return state.squares[this.squareIndex]();
        }
    });
});
