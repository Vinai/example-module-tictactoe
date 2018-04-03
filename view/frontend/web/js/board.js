define(['uiComponent', 'ko', 'square'], function (Component, ko, Square) {
    'use strict';
    
    return Component.extend({
        defaults: {
            template: 'VinaiKopp_TicTacToe/board',
            provider: 'game',
            imports: {
                squares: '${ $.provider }:squares'
            },
            tracks: {
                squares: true
            }
        },
        initialize: function () {
            this._super();
            this.cells = this.squares.map(function (v, i) {
                return new Square({index: i});
            })
        },
        square: function(i) {
            return this.cells[i];
        }
    });
});
