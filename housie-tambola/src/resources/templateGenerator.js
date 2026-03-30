function possibleSpaces(arr) {
    const spaces = [];
    for (let i = 0; i < 9; i++) {
        if (arr[i])
            continue;
        else if (i === 0) {
            if ((arr[i + 1] !== 1 && arr[i + 2] !== 1) || (arr[i + 1] !== 1 && arr[i + 2] === 1) || (arr[i + 1] === 1 && arr[i + 2] !== 1)) {
                spaces.push(i);
            }
        }
        else if (i == 1) {
            if (!(arr[i - 1] === 1 && arr[i + 1] === 1) && !(arr[i + 1] === 1 && arr[i + 2] === 1)) {
                spaces.push(i);
            }
        }
        else if (i < 7) {
            if (!(arr[i - 1] === 1 && arr[i - 2] === 1) && !(arr[i + 1] === 1 && arr[i + 2] === 1) && !(arr[i - 1] === 1 && arr[i + 1] === 1)) {
                spaces.push(i);
            }
        }
        else if (i == 7) {
            if (!(arr[i - 1] === 1 && arr[i - 2] === 1) && !(arr[i - 1] === 1 && arr[i + 1] === 1)) {
                spaces.push(i);
            }
        }
        else if (i == 8) {
            if (!(arr[i - 1] === 1 && arr[i - 2] === 1)) {
                spaces.push(i);
            }
        }
    }
    return spaces;
}


const firstRowGenerator = () => {
    let firstRow = [];
    let ones = 5;
    for (let i = 0; i < 2; i++) {
        let choice = Math.floor(Math.random() * 2);
        if (choice === 1) {
            ones--;
            firstRow.push(1);
        }
    }
    while (ones > 0) {
        let spaces = possibleSpaces(firstRow);
        let choice = Math.floor(Math.random() * spaces.length);
        firstRow[spaces[choice]] = 1;
        ones--;
    }
    for (let i = 0; i < 9; i++) {
        if (firstRow[i] === undefined)
            firstRow[i] = 0;
    }
    // console.log(...firstRow);
    return firstRow;
    //     else if (i < 7) {
    //         if (firstRow[i - 2] === 0 && firstRow[i - 1] === 0) {
    //             firstRow.push(1);
    //             numbers--;
    //         }
    //         else if (firstRow[i - 2] === 1 && firstRow[i - 1] === 1) {
    //             firstRow.push(0);
    //             spaces--;
    //         }
    //         else {
    //             if (numbers > 0 && spaces > 0) {
    //                 let choice = Math.floor(Math.random() * 2);
    //                 if (choice === 0) {
    //                     firstRow.push(0);
    //                     spaces--;
    //                 }
    //                 else {
    //                     firstRow.push(1);
    //                     numbers--;
    //                 }
    //             }
    //             else if (numbers > 0) {
    //                 firstRow.push(1);
    //                 numbers--;
    //             }
    //             else {
    //                 firstRow.push(0);
    //                 spaces--;
    //             }
    //         }
    //     }
    //     else if (i < 9) {
    //         if (firstRow[i - 2] === 0 && firstRow[i - 1] === 0) {
    //             firstRow.push(1);
    //             numbers--;
    //         }
    //         else if (firstRow[i - 2] === 1 && firstRow[i - 1] === 1) {
    //             firstRow.push(0);
    //             spaces--;
    //         }
    //         else {
    //             if (numbers > 0 && spaces > 0) {
    //                 let choice = Math.floor(Math.random() * 2);
    //                 if (choice === 0) {
    //                     firstRow.push(0);
    //                     spaces--;
    //                 }
    //                 else {
    //                     firstRow.push(1);
    //                     numbers--;
    //                 }
    //             }
    //             else if (numbers > 0) {
    //                 firstRow.push(1);
    //                 numbers--;
    //             }
    //             else {
    //                 firstRow.push(0);
    //                 spaces--;
    //             }
    //         }
    //     }
    // }

}

const secondRowGenerator = (firstRow) => {
    const secondRow = [];
    const indexOfSpaces = [];
    for (const i in firstRow) {
        if (firstRow[i] === 0) {
            indexOfSpaces.push(i);
        }
    }
    let k = 0;
    while (k < 3) {
        let choice = Math.floor(Math.random() * indexOfSpaces.length);
        secondRow[indexOfSpaces[choice]] = 1;
        indexOfSpaces.splice(choice, 1);
        k++;
    }
    let numbers = 2;
    while (numbers > 0) {
        let spaces = possibleSpaces(secondRow);
        let choice = Math.floor(Math.random() * spaces.length);
        secondRow[spaces[choice]] = 1;
        numbers--;
    }
    for (let i = 0; i < 9; i++) {
        if (secondRow[i] === undefined) {
            secondRow[i] = 0;
        }
    }
    // console.log(...secondRow);

    return secondRow;
}

const thirdRowGenerator = (firstRow, secondRow) => {
    let indexOfSpace = null;
    let thirdRow = [];
    let ones = 5;
    for (let i = 0; i < 9; i++) {
        if (firstRow[i] === 0 && secondRow[i] === 0) {
            indexOfSpace = i;
            break;
        }
    }
    const indexOfSpaces = [];
    for (const i in secondRow) {
        if (secondRow[i] === 0) {
            indexOfSpaces.push(i);
        }
    }
    let k = 0;
    while (k < 2) {
        let choice = Math.floor(Math.random() * indexOfSpaces.length);
        thirdRow[indexOfSpaces[choice]] = 1;
        indexOfSpaces.splice(choice, 1);
        ones--;
        k++;
    }
    if (indexOfSpace) {
        if (thirdRow[indexOfSpace] !== 1) {

            thirdRow[indexOfSpace] = 1;
            ones--;
        }
    }
    while (ones > 0) {
        let spaces = possibleSpaces(thirdRow);
        let choice = Math.floor(Math.random() * spaces.length);
        thirdRow[spaces[choice]] = 1;
        ones--;
    }
    for (let i = 0; i < 9; i++) {
        if (thirdRow[i] === undefined)
            thirdRow[i] = 0;
    }
    // console.log(...thirdRow);
    return thirdRow;
    //     if (thirdRow[i] === 1) {
    //         continue;
    //     }
    //     else {
    //         if (numbers > 0 && spaces > 0) {
    //             let choice = Math.floor(Math.random() * 2);
    //             if (choice === 0) {
    //                 thirdRow[i] = 0;
    //                 spaces--;
    //             }
    //             else {
    //                 thirdRow[i] = 1;
    //                 numbers--;
    //             }
    //         }
    //         else if (numbers > 0) {
    //             thirdRow[i] = 1;
    //             numbers--;
    //         }
    //         else {
    //             thirdRow[i] = 0;
    //             spaces--;
    //         }
    //     }
    // }
}


function templateGenerator() {
    let firstRow;
    let secondRow;
    let thirdRow;
    do {
        firstRow = firstRowGenerator();
    }
    while (!validRow(firstRow));
    do {
        secondRow = secondRowGenerator(firstRow);
    }
    while (!validRow(secondRow));
    do {
        thirdRow = thirdRowGenerator(firstRow, secondRow);
    }
    while (!validRow(thirdRow));
    // console.log(...firstRow)
    // console.log(...secondRow)
    // console.log(...thirdRow)
    return [firstRow, secondRow, thirdRow];
}

function validRow(row) {
    for (let i = 0; i < row.length - 2; i++) {
        if (row[i] === 0 && row[i + 1] === 0 && row[i + 2] === 0) {
            return false;
        }
    }
    return true;
}

// console.log(possibleSpaces([1, 1, , , , 1, 1]));

export default templateGenerator;


