define(['uiComponent', 'ticTacToeState'], function (Component, state) {
    'use strict';

    return Component.extend({
        defaults: {
            template: 'VinaiKopp_TicTacToe/square'
        },
        handleClick: function () {
            if ('' === this.value() && !state.winner) {
                state.squares[this.index](state.xIsNext ? 'X' : 'O');
            }
        },
        value: function () {
            return state.squares[this.index]();
        }
    });
});
