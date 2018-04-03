define(['uiComponent'], function (Component) {
    'use strict';

    return Component.extend({
        defaults: {
            template: 'VinaiKopp_TicTacToe/square',
            tracks: {
                xIsNext: true
            },
            links: {
                squares: '${ $.provider }:squares'
            },
            imports: {
                xIsNext: '${ $.provider }:xIsNext',
                winner: '${ $.provider }:winner'
            }
        },
        initConfig: function (options) {
            this._super(options);
            this.squareIndex = options.index;
            this.index = 'square' + options.index;
        },
        square: function () {
            return this.squares[this.squareIndex];
        },
        value: function () {
            const square = this.square();
            return square();
        },
        handleClick: function () {
            const square = this.square();
            if ('' === square() && !this.winner) {
                square(this.xIsNext ? 'X' : 'O');
            }
        }
    });
});
