const readline = require('readline');

const BOARD_SIZE = 3;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

function getPlayerMove(current_player) {
    return new Promise((resolve) => {
        rl.question(`The player ${current_player}, insert a number (0-2): `, (row) => {
            rl.question(`The player ${current_player}, insert a number (0-2): `, (col) => {
                row = parseInt(row);
                col = parseInt(col);
                resolve({ row, col });
            });
        });
    });
}

function fillBoard(game_board) {
    for (let i = 0; i < BOARD_SIZE; i++) {
        row = [];
        for (let j = 0; j < BOARD_SIZE; j++) {
            row.push(' ');
        }
        game_board.push(row);
    }
}

function switchPlayer(current_player) {
    return current_player == 'X' ? 'O' : 'X'
}

function updateBoard(game_board, current_player, row, col) {
    game_board[row][col] = current_player;
}

function isBoardedFull(game_board) {
    for (let i = 0; i < BOARD_SIZE; i++) {
        for (let j = 0; j < BOARD_SIZE; j++) {
            if (game_board[i][j] === ' ') return false;
        } 
    }
    return true;
}

function statusOfGame(game_board) {
    console.log("\nThe Game Status:\n");
    for (let i = 0; i < BOARD_SIZE; i ++) {
        console.log(game_board[i].toString().replaceAll(',', '|'));
    }
}

function checkWinner(game_board, current_player) {
    let victory_condition = Array(3).fill(current_player).join(",");
    for (let i = 0; i < BOARD_SIZE; i++) {
        if (game_board[i].toString() == victory_condition) return true;
    }
    for (let j = 0; j < BOARD_SIZE; j++) {
        let column = [];
        for (let i = 0; i < BOARD_SIZE; i++) {
            column.push(game_board[i][j]);
        }
        if (column.toString() == victory_condition) return true;
    }
    let main_diagonal = [0, 1, 2].map(i => game_board[i][i]).toString();
    let secondaray_diagonal =[[0, 2], [1, 1], [2, 0]].map(([i, j]) => game_board[i][j]).toString();
    if(main_diagonal == victory_condition || secondaray_diagonal == victory_condition) return true;
    return false;
}

async function playGame() {
    let game_board = [];
    fillBoard(game_board);
    let current_player = 'X';
    let winner = false;
    while (!isBoardedFull(game_board) && !winner) {
        statusOfGame(game_board); 
        console.log(`\nIt's the time of the player ${current_player}\n`);
        let { row, col } = await getPlayerMove(current_player);
        if (game_board[row][col] !== ' ') {
            console.log("The place is busy! Try again.");
            continue;
        }
        updateBoard(game_board, current_player, row, col); 
        if (checkWinner(game_board, current_player)) { 
            statusOfGame(game_board);
            console.log(`The player ${current_player} win :)`);
            winner = true;
            break;
        }
        current_player = switchPlayer(current_player);
    }
    if (!winner) {
        statusOfGame(game_board);
        console.log("The game draw :(");
    }
    rl.close();
}
playGame();