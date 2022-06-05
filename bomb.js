class Bomb {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = 0
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

kill(){
   for(var i in this.directions){
       var x = this.directions[i][0];
       var y = this.directions[i][0];
       if (x >= 0&& x <matrix[0].length&& y < matrix.length){
           if(matrix[y][x] = 1){
               matrix[y][x] = 0
               for(var i in grassArr){
                   if(x == grassArr[i].x && y == grassArr[i].y){
                       grassArr.splice(i, 1);
                   }
               }
           }
           if(matrix[y][x] == 2){
               matrix[y][x] = 0
               for(var i in grassEaterArr){
                   if(x == grassEaterArr[i].x && y == grassEaterArr[i].y){
                       grassEaterArr.splice(i, 1);
                   }
               }
           }
       }
   }
}
}