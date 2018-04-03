define(['uiComponent', 'ko', 'ticTacToeState'], function (Component, ko, state) {
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
            state.moves.push({
                squares: state.squares.map(v => v()),
                xIsNext: state.xIsNext
            });
        }
    }

    function handleValueChange() {
        if (! timeTravelInProgress) {
            state.xIsNext = !state.xIsNext;
        }
        state.winner = calculateWinner(state.squares.map(v => v()));
    }

    return Component.extend({
        defaults: {
            template: 'VinaiKopp_TicTacToe/game'
        },
        initialize: function () {
            this._super();
            state.squares.forEach((square) => {
                square.subscribe(addToHistory, null, 'beforeChange');
                square.subscribe(handleValueChange);
            });
        },
        status: function () {
            if (state.winner) {
                return 'Winner ' + state.winner;
            } else {
                return 'Next player: ' + (state.xIsNext ? 'X' : 'O');
            }
        },
        moves: function () {
            return state.moves;
        },
        jumpToLabel: function (moveNumber) {
            return moveNumber === 0 ? "Go to start" : "Go to move " + moveNumber;
        },
        jumpTo: function (move) {
            timeTravelInProgress = true;
            move.squares.forEach((square, i) => state.squares[i](square));
            state.xIsNext = move.xIsNext;
            state.moves = state.moves.slice(0, state.moves.indexOf(move));
            timeTravelInProgress = false;
        }
    });
});
