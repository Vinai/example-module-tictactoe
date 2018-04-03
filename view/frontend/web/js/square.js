define(['uiComponent'], function (Component) {
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
        square: function () {
            return this.game.squares[this.squareIndex];
        },
        value: function () {
            const square = this.square();
            return square();
        },
        handleClick: function () {
            const square = this.square();
            if ('' === square() && !this.game.winner) {
                square(this.game.xIsNext ? 'X' : 'O');
            }
        }
    });
});
