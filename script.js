function generate(matLen, gr, grEat, pr, co, wt) {
    let matrix = []
    for (let i = 0; i < matLen; i++) {
        matrix[i] = []
        for (let j = 0; j < matLen; j++) {
            matrix[i][j] = 0
        }
    }

    for (let i = 0; i < gr; i++) {
        let x = Math.floor(Math.random() * matLen)
        let y = Math.floor(Math.random() * matLen)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 1
        }
    }
    for (let i = 0; i < grEat; i++) {
        let x = Math.floor(Math.random() * matLen)
        let y = Math.floor(Math.random() * matLen)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 2
        }
    }
    for (let i = 0; i < pr; i++) {
        let x = Math.floor(Math.random() * matLen)
        let y = Math.floor(Math.random() * matLen)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 3
        }
    }

    for (let i = 0; i < co; i++) {
        let x = Math.floor(Math.random() * matLen)
        let y = Math.floor(Math.random() * matLen)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 4
        }
    }
    for (let i = 0; i < wt; i++) {
        let x = Math.floor(Math.random() * matLen)
        let y = Math.floor(Math.random() * matLen)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 5
        }
    }
   
   
    return matrix
}

function minMax(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}
let matrix = generate(25, 45, 20, 10,4,3,2)


var side = 15;
let grassArr = []
let grassEaterArr = []
let preDatorArr = []
let coronaArr = []
let waterArr = []
let bombArr = []


function setup() {
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                let gr = new Grass(x, y)
                grassArr.push(gr)
            } else if (matrix[y][x] == 2) {
                let gr = new GrassEater(x, y)
                grassEaterArr.push(gr)
            } else if (matrix[y][x] == 3) {
                let pr = new Predator(x, y)
                preDatorArr.push(pr)
            } else if (matrix[y][x] == 4) {
                let co = new Corona(x, y)
                coronaArr.push(co)
            }
            else if (matrix[y][x] == 5) {
                let wt = new Water(x, y)
                waterArr.push(wt)
            }
            else if (matrix[y][x] == 6) {
                let bb = new Bomb(x, y)
                bombArr.push(bb)
            }
           
        }
    }
}

function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 3) {
                fill("red");
            }
            else if (matrix[y][x] == 4) {
                fill("blue");
            }
            else if (matrix[y][x] == 5) {
                fill("cyan");
            }
            else if (matrix[y][x] == 6) {
                fill("black");
            }
           



            rect(x * side, y * side, side, side);


        }
    }

    for (var i in grassArr) {
        grassArr[i].mul()
    }

    for (let i in grassEaterArr) {
        grassEaterArr[i].eat()
    }

    for (let i in preDatorArr) {
        preDatorArr[i].eat()
    }
    // for (let i in coronaArr) {
    //     coronaArr[i].eat()
    // }
    if(preDatorArr.length == 0 ) {
        for (let i in waterArr) {
            waterArr[i].mul()
        }
    }
    for(let i in bombArr){
        bombArr[i].kill()
    }
    
    
}
