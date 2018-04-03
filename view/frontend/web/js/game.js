define(['uiComponent', 'ko'], function (Component, ko) {
    'use strict';

    function calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    let timeTravelInProgress = false;

    function addToHistory() {
        if (! timeTravelInProgress) {
            this.moves.push({
                squares: this.squares.map(v => v()),
                xIsNext: this.xIsNext,
                parent: this
            });
        }
    }

    function handleValueChange() {
        if (! timeTravelInProgress) {
            this.xIsNext = !this.xIsNext;
        }
        this.winner = calculateWinner(this.squares.map(v => v()));
    }

    return Component.extend({
        defaults: {
            template: 'VinaiKopp_TicTacToe/game',
            moves: [],
            squares: [...Array(9).keys()].map(x => ko.observable('')),
            xIsNext: true,
            winner: false,
            tracks: {
                moves: true,
                squares: true,
                xIsNext: true,
                winner: true
            }
        },
        initialize: function () {
            this._super();
            this.squares.forEach(square => {
                square.subscribe(addToHistory, this, 'beforeChange');
                square.subscribe(handleValueChange, this);
            });
        },
        status: function () {
            if (this.winner) {
                return 'Winner ' + this.winner;
            } else {
                return 'Next player: ' + (this.xIsNext ? 'X' : 'O');
            }
        },
        jumpToLabel: function (moveNumber) {
            return moveNumber === 0 ? "Go to start" : "Go to move " + moveNumber;
        },
        jumpTo: function (move) {
            const game = move.parent;
            timeTravelInProgress = true;
            move.squares.forEach((square, i) => game.squares[i](square));
            game.xIsNext = move.xIsNext;
            game.moves = game.moves.slice(0, game.moves.indexOf(move));
            timeTravelInProgress = false;
        }
    });
});
