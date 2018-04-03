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
        square: function () {
            return this.squares[this.index];
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
