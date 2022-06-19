document.addEventListener("DOMContentLoaded", function(event) { 
    let game = [
        [1,1,1,1,1,1,1,1,1,1,1,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,1,1,1,1,1,1,1,1,1,1,1],
    ];

    let gameRender =  [
        [1,1,1,1,1,1,1,1,1,1,1,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,1,1,1,1,1,1,1,1,1,1,1],
    ];

    let currentPiece = [];
    let rotate = 0;
    let type;
    let lines =0;
    let lvl = 1;

    function displayGame() {
        document.getElementById('bgmusic').play()
        document.getElementById('bgmusic').loop = true;
        document.getElementById('score').innerHTML = lines;
        document.getElementById('lvl').innerHTML = lvl;
        let output ="";

        for (let i = 0; i < game.length; i++) {
            output += "\n<div class='row'>\n";

            for (let j = 0; j < game[i].length; j++) {
                if(game[i][j] == 0) {
                output += "<div class='brick'></div>";
                }
                else if(game[i][j] == 1) {
                output += "<div class='borderPiece'></div>";
                } 
                else if(game[i][j] == 2 || game[i][j] == 20) {
                output += "<div class='Tpiece'></div>";
                } 
                else if(game[i][j] == 3 || game[i][j] == 30) {
                output += "<div class='Spiece'></div>";
                } 
                else if(game[i][j] == 4 || game[i][j] == 40) {
                output += "<div class='Ppiece'></div>";
                } 
                else if(game[i][j] == 5 || game[i][j] == 50) {
                output += "<div class='LRpiece'></div>";
                } 
                else if(game[i][j] == 6 || game[i][j] == 60) {
                output += "<div class='Lpiece'></div>";
                } 
                else if(game[i][j] == 7 || game[i][j] == 70) {
                output += "<div class='Zpiece'></div>";
                } 
            }

          output += "\n</div>";
        }

        document.getElementById("mainGame").innerHTML = output;
    }

    function checkMatch() {

        let gameOver = false;

        for(let j = 1; j < gameRender[1].length-1; j++) {
            if(gameRender[1][j] != 0) {
                gameOver = true;
            }
        }

        if(gameOver) {
            location.reload();
            alert('gameOver');
        }

        for(let i=1; i<gameRender.length-1; i++) {
            let match = 0;

            for(let j=1; j<gameRender[i].length-1; j++) {
                if(gameRender[i][j] == 0) {
                    match++;
                }
            }

            if(match == 0) {
                document.getElementById('clear').play()
                lines++;

                if(lines%5 == 0) {
                    lvl++;
                }
                
                for(let k = i; k > 1; k--) {
                    for(let j = 0; j<gameRender[k].length; j++) {
                        gameRender[k][j] = gameRender[k-1][j];
                    }
                }

            }
        }
    }

    let select = Math.floor(Math.random() * 6);

    function reset() {

        let Tpiece =  [
            [{x: 5, y: 1},{x: 6, y: 1},{x: 6, y: 2},{x: 7, y: 1}],
            [{x: 6, y: 1},{x: 6, y: 2},{x: 7, y: 2},{x: 6, y: 3}],
            [{x: 5, y: 2},{x: 6, y: 2},{x: 6, y: 1},{x: 7, y: 2}],
            [{x: 6, y: 1},{x: 6, y: 2},{x: 5, y: 2},{x: 6, y: 3}],
        ];

        let Spiece =   [
            [{x: 7, y: 1},{x: 7, y: 2},{x: 6, y: 1},{x: 6, y: 2}],
            [{x: 7, y: 1},{x: 7, y: 2},{x: 6, y: 1},{x: 6, y: 2}],
            [{x: 7, y: 1},{x: 7, y: 2},{x: 6, y: 1},{x: 6, y: 2}],
            [{x: 7, y: 1},{x: 7, y: 2},{x: 6, y: 1},{x: 6, y: 2}],
        ];
        
        let Ppiece =   [
            [{x: 5, y: 2},{x: 6, y: 2},{x: 7, y: 2},{x: 8, y: 2}],
            [{x: 6, y: 1},{x: 6, y: 2},{x: 6, y: 3},{x: 6, y: 4}],
            [{x: 5, y: 2},{x: 6, y: 2},{x: 7, y: 2},{x: 8, y: 2}],
            [{x: 6, y: 1},{x: 6, y: 2},{x: 6, y: 3},{x: 6, y: 4}],
        ];

        let Lpiece =   [
            [{x: 6, y: 1},{x: 6, y: 2},{x: 6, y: 3},{x: 7, y: 3}],
            [{x: 5, y: 2},{x: 6, y: 2},{x: 7, y: 2},{x: 7, y: 1}],
            [{x: 6, y: 1},{x: 6, y: 2},{x: 6, y: 3},{x: 5, y: 1}],
            [{x: 5, y: 1},{x: 6, y: 1},{x: 7, y: 1},{x: 5, y: 2}],
        ];

        let LRpiece =   [
            [{x: 6, y: 1},{x: 6, y: 2},{x: 6, y: 3},{x: 5, y: 3}],
            [{x: 5, y: 1},{x: 6, y: 1},{x: 7, y: 1},{x: 7, y: 2}],
            [{x: 6, y: 1},{x: 6, y: 2},{x: 6, y: 3},{x: 7, y: 1}],
            [{x: 5, y: 2},{x: 6, y: 2},{x: 7, y: 2},{x: 5, y: 1}],
        ];

        let ZPiece =   [
            [{x: 5, y: 1},{x: 6, y: 1},{x: 6, y: 2},{x: 7, y: 2}],
            [{x: 7, y: 1},{x: 7, y: 2},{x: 6, y: 2},{x: 6, y: 3}],
            [{x: 5, y: 1},{x: 6, y: 1},{x: 6, y: 2},{x: 7, y: 2}],
            [{x: 7, y: 1},{x: 7, y: 2},{x: 6, y: 2},{x: 6, y: 3}],
        ];

        type = select+2;
        let pieces = [Tpiece, Spiece, Ppiece, Lpiece, LRpiece,ZPiece];
        currentPiece = pieces[select];
        select = Math.floor(Math.random() * 6);

        if(select == 0) {
            document.getElementById('nextPiece').style.backgroundImage = "url('assets/Tpiece.png')";
        }
        else if(select == 1) {
            document.getElementById('nextPiece').style.backgroundImage = "url('assets/Spiece.png')";
        }
        else if(select == 2) {
            document.getElementById('nextPiece').style.backgroundImage = "url('assets/Ppiece.png')";
        }
        else if(select == 3) {
            document.getElementById('nextPiece').style.backgroundImage = "url('assets/LRpiece.png')";
        }
        else if(select == 4) {
            document.getElementById('nextPiece').style.backgroundImage = "url('assets/Lpiece.png')";
        }
        else if(select == 5) {
            document.getElementById('nextPiece').style.backgroundImage = "url('assets/Zpiece.png')";
        }

        down = true;
    }

    let down = false;
    function movePieceDown(piece) {
        if(down) {

            for(let i =0; i< game.length; i++) {
                for(let j =0; j< game[i].length; j++) {
                    game[i][j] = gameRender[i][j];
                }
            }
            
            for(let i = 0; i< piece.length; i++) {
                game[piece[rotate][i].y][piece[rotate][i].x] = type;
                for( let k = 2; k <= 7; k++) {
                    if( game[piece[rotate][i].y+1][piece[rotate][i].x] == (k*10) ||
                        game[piece[rotate][i].y+1][piece[rotate][i].x] == 1) {
                        down = false;
                    }
                }
            }
                
        }
        else{
            for(let k =0; k< game.length; k++) {

                for(let j =0; j< game[k].length; j++) {

                    let block = game[k][j];
                    if( game[k][j] != 0 &&
                        game[k][j] !=1 &&
                        game[k][j] != 20 &&
                        game[k][j] != 30 &&
                        game[k][j] != 40 && 
                        game[k][j] != 50 && 
                        game[k][j] != 60 && 
                        game[k][j] != 70) {
                        block = type * 10;
                    }

                    gameRender[k][j] = block;
                }
            }
            reset();
        }

        for(let i =0; i<piece.length; i++) {
            for(let j =0; j<piece[i].length; j++) {
                piece[i][j].y++;
            }
        }

    }

    document.onkeydown = function (e) {
        let moveLeft = true;
        let moveRight = true;

        for(let i =0; i< currentPiece.length; i++) {

            for(let j =0; j< currentPiece[i].length; j++) {
                let rightVal = game[currentPiece[rotate][j].y][currentPiece[rotate][j].x+1];
                let leftVal = game[currentPiece[rotate][j].y][currentPiece[rotate][j].x-1];

                if( rightVal == 1 ||
                    rightVal == 20 ||
                    rightVal == 30 ||
                    rightVal == 40 ||
                    rightVal == 50 ||
                    rightVal == 60 ||
                    rightVal == 70) {
                     moveRight = false;
                }
                else if(
                    leftVal == 1 ||
                    leftVal == 20 ||
                    leftVal == 30 ||
                    leftVal == 40 ||
                    leftVal == 50 ||
                    leftVal == 60 ||
                    leftVal == 70
                    ) {
                    moveLeft = false;
                }

            }
        }

        if(e.keyCode == 37 &&  moveLeft) {

            for(let i=0; i< currentPiece.length; i++) {

                for(let j =0; j< currentPiece[i].length; j++) {
                    currentPiece[i][j].x--;
            
                }
            }

        }
        else if(e.keyCode == 39 && moveRight) {

            for(let i=0; i< currentPiece.length; i++) {

                for(let j =0; j< currentPiece[i].length; j++) {
                    currentPiece[i][j].x++;

                }
            }
        }
        else if(e.keyCode == 38 ) {

            if(rotate == currentPiece.length-1) {
                rotate = 0;
            }else{
                rotate++;
            }
        }
        else if(e.keyCode == 40) {
            speedDown = true;
        }
    };

    document.onkeyup = function(e) {
        if(e.keyCode == 40) {
            speedDown = false;
        }
    }

    let speedDown = false;
    let counter =0;

    function gameLoop() {
        checkMatch();
        counter++;

        if(counter%(16-lvl) ==0) {
            movePieceDown(currentPiece);

            if(speedDown) {
                for(let i =0; i< 3; i++) {
                    movePieceDown(currentPiece);
                }
            }

        }
    }
    
    setInterval(gameLoop,20);
    setInterval(displayGame,20);
});