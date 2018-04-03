define(['uiComponent'], function (Component) {
    'use strict';

    let state;
    
    return Component.extend({
        defaults: {
            template: 'VinaiKopp_TicTacToe/square'
        },
        initConfig: function (options) {
            state = options.state;
            delete options.state;
            this._super(options);
        },
        square: function () {
            return state.squares[this.index];
        },
        value: function () {
            const square = this.square();
            return square();
        },
        handleClick: function () {
            const square = this.square();
            if ('' === square() && !state.winner) {
                square(state.xIsNext ? 'X' : 'O');
            }
        }
    });
});
