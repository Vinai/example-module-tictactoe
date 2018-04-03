define(['ko'], function (ko) {
    'use strict';
    
    return ko.track({
        moves: [],
        squares: [...Array(9).keys()].map(_ => ko.observable('')),
        xIsNext: true,
        winner: false
    });
});
