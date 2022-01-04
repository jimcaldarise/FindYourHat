const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = '0';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
   constructor(fieldArray) {
      this._field = fieldArray;
      this._vPosition = 0;
      this._hPosition = 0;
   }

   print() {
      for(let i = 0; i < this._field.length; i++) {
         console.log(this._field[i].join(''));
      }
   }

   move(dir) {
      let newV;
      let newH;
      if(dir === 'u') {
         this._vPosition -= 1;
      } else if(dir === 'd') {
         this._vPosition += 1;
      } else if(dir === 'l') {
         this._hPosition -= 1;
      } else if(dir === 'r') {
         this._hPosition += 1;
      } else {
         console.log('Invalid input try again');
      }
   }

   checkMove() {
      if(this._vPosition < 0 || this._vPosition >= this._field.length ||
         this._hPosition < 0 || this._hPosition >= this._field[0].length) {
         return 'Game Over: Out of Bounds!';
      }
      let currLoc = this._field[this._vPosition][this._hPosition];
      if(currLoc === '^') {
         return 'You Win: You found your hat!';
      } else if(currLoc === '0') {
         return 'Game Over: You fell down a hole.';
      } else {
         this._field[this._vPosition][this._hPosition] = '*';
         return 'continue';
      }
   }

   static generateField(rows, cols, per) {
      /* fill the field with neutrals and holes*/
      let arr = [];
      for(let i = 0; i < rows; i++) {
         let innerArr = [];
         for(let j = 0; j < cols; j++) {
            innerArr.push(Field.populate(per));
         }
         arr.push(innerArr);
      }

      /*place hat randomly */
      let hatVPos;
      let hatHPos;
      do{
         hatVPos = Math.floor(Math.random()*rows);
         hatHPos = Math.floor(Math.random()*cols);
      } while(hatVPos != 0 && hatHPos != 0);

      arr[hatVPos][hatHPos] = '^';
      arr[0][0] = '*';
      return arr;
   }

   static populate(per) {
      let num = Math.random();
      let percent = per/100;
      if(num >= percent) {
         return '░';
      } else {
         return '0';
      }
   }
}

/* Gameplay */
console.log('Generating a new field...')
console.log("let's play. Enter 'u' to move up, 'd' for down, 'l' for left, or 'r' for right.");
const currField = Field.generateField(25, 25, 20);

const field = new Field(currField);

do {
   field.print();
   let userMove = prompt('Next move: ');
   field.move(userMove);
} while(field.checkMove() === 'continue');

console.log(field.checkMove());