
function addNumbers(a: number, b: number): number {
    return a + b;
}


const addNumbersArrow = (a:number, b:number): number => {
return a+b;
}

function multiply(firstNumber: number, secondNumber?: number, base: number = 2){
    return firstNumber * base;
}

interface Character {
    name: string;
    hp: number;
    showHp: () => 
}

// const result = addNumbers(1,2);
// const resultArrow = addNumbersArrow(6,9);
// const multiplyResult: number = multiply(3,4);

// console.log({result, resultArrow, multiplyResult});

const healCharacter = (character, amount: number) => {
    character.pv += amount;
}

export {};