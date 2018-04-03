define(['uiComponent', 'ko', 'square'], function (Component, ko, Square) {
    'use strict';
    
    return Component.extend({
        defaults: {
            template: 'VinaiKopp_TicTacToe/board',
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
                return new Square({
                    index: i,
                    provider: this.provider
                });
            }.bind(this))
        }
    });
});
