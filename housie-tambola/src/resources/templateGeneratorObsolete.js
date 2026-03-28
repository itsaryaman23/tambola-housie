const firstRowGenerator = () => {
    const patterns = [[1, 0, 1, 0, 1, 0, 1, 0, 1], [1, 1, 1, 2], [1, 2, 2]];
    const randomPattern = patterns[Math.floor(Math.random() * 3)];
    let row = [];
    let numbers = 5;
    let spaces = 4;
    let prev;
    for (let i = 0; i < 9; i++) {
        if (i < 2) {
            let choice = Math.floor(Math.random() * 2);
            if (choice === 0) {
                spaces--;
                row.push(0);
            }
            else {
                numbers--;
                row.push(1);
            }
        }
        else {
            if (row[i - 2] === 0 && row[i - 1] === 0) {
                row.push(1);
                numbers--;
            }
            else if (row[i - 2] === 1 && row[i - 1] === 1) {
                row.push(0);
                spaces--;
            }
            else {
                if (numbers > 0 && spaces > 0) {
                    let choice = Math.floor(Math.random() * 2);
                    if (choice === 0) {
                        row.push(0);
                        spaces--;
                    }
                    else {
                        row.push(1);
                        numbers--;
                    }
                }
                else if (numbers > 0) {
                    row.push(1);
                    numbers--;
                }
                else {
                    row.push(0);
                    spaces--;
                }
            }
        }
    }
    return row;
}

const secondRowGenerator = (firstRow) => {
    const indexOfSpaces = [];
    let secondRow = [];
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
    let spaces = 4;
    for (let i = 0; i < 9; i++) {
        if (secondRow[i])
            continue;
        else if (i === 0) {
            if (secondRow[i + 1] === 1 && secondRow[i + 2] === 1) {
                secondRow[i] = 0;
                spaces--;
            }
        }
        else if (i === 1) {
            if (secondRow[i + 1] === 1 && secondRow[i + 2] === 1) {
                secondRow[i] = 0;
                spaces--;
            }
            else if (secondRow[i - 1] === 1 && secondRow[i + 1] === 1) {
                secondRow[i] = 0;
                spaces--;
            }
        }
        else if (i < 7) {
            if (secondRow[i - 1] === 1 && secondRow[i - 2] === 1) {
                secondRow[i] = 0;
                spaces--;
            }
            else if (secondRow[i + 1] === 1 && secondRow[i + 2] === 1) {
                secondRow[i] = 0;
                spaces--;
            }
            else if (secondRow[i - 1] === 1 && secondRow[i + 1] === 1) {
                secondRow[i] = 0;
                spaces--;
            }
        }
        else if (i === 7) {
            if (secondRow[i - 1] === 1 && secondRow[i - 2] === 1) {
                secondRow[i] = 0;
                spaces--;
            }
            else if (secondRow[i - 1] === 1 && secondRow[i + 1] === 1) {
                secondRow[i] = 0;
                spaces--;
            }
        }
        else if (i === 8) {
            if (secondRow[i - 1] === 1 && secondRow[i - 2] === 1) {
                secondRow[i] = 0;
                spaces--;
            }
        }
    }

    for (let i = 0; i < 9; i++) {
        if (secondRow[i] === 1 || secondRow[i] === 0) {
            continue;
        }
        else if (i === 0) {
            if (secondRow[i + 1] === 1 && secondRow[i + 2] === 1) {
                secondRow[i] = 0;
                spaces--;
            }
            else {
                let choice = Math.floor(Math.random() * 2);
                secondRow[i] = choice;
                if (choice === 1)
                    numbers--;
                else
                    spaces--;
            }
        }
        else if (i === 1) {
            if (secondRow[i + 1] === 1 && secondRow[i + 2] === 1) {
                secondRow[i] = 0;
                spaces--;
            }
            else if (secondRow[i - 1] === 1 && secondRow[i + 1] === 1) {
                secondRow[i] = 0;
                spaces--
            }

            else {
                let choice = Math.floor(Math.random() * 2);
                secondRow[i] = choice;
                if (choice === 1)
                    numbers--;
                else
                    spaces--;
            }
        }
        else if (i < 7) {
            if (secondRow[i - 1] === 1 && secondRow[i - 2] === 1) {
                secondRow[i] = 0;
                spaces--
            }
            else if (secondRow[i + 1] === 1 && secondRow[i + 2] === 1) {
                secondRow[i] = 0;
                spaces--;
            }
            else if (secondRow[i - 1] === 0 && secondRow[i - 2] === 0) {
                secondRow[i] = 1;
                numbers--;
            }
            else {
                if (spaces > 0 && numbers > 0) {
                    let choice = Math.floor(Math.random() * 2);
                    secondRow[i] = choice;
                    if (choice === 1)

                        numbers--;
                    else
                        spaces--;
                }
                else if (numbers > 0) {
                    secondRow[i] = 1;
                    numbers--;
                }
                else {
                    secondRow[i] = 0;
                    spaces--;
                }
            }
        }
        else if (i === 7) {
            if (secondRow[i - 1] === 1 && secondRow[i - 2] === 1) {
                secondRow[i] = 0;
                spaces--;
            }
            else if (secondRow[i - 1] === 0 && secondRow[i - 2] === 0 && numbers > 0) {
                secondRow[i] = 1;
                numbers--;
            }
            else if (secondRow[i - 1] === 1 && secondRow[i + 1] === 1) {
                secondRow[i] = 0;
                spaces--;
            }
            else {
                if (numbers > 0 && spaces > 0) {
                    let choice = Math.floor(Math.random() * 2);
                    secondRow[i] = choice;
                    if (choice === 1)

                        numbers--;
                    else
                        spaces--;
                }
                else if (numbers > 0) {
                    secondRow[i] = 1;
                    numbers--;
                }
                else {
                    secondRow[i] = 0;
                    spaces--;
                }
            }

        }
        else {
            if (spaces > 0) {
                secondRow[i] = 0;
                spaces--;
            }
            else {
                secondRow[i] = 1;
                numbers--;
            }
        }
    }
    return secondRow;
}

const thirdRowGenerator = (firstRow, secondRow) => {
    const indexOfSpace = null;
    let thirdRow = [];
    for (let i = 0; i < 9; i++) {
        if (firstRow[i] === 0 && secondRow[i] === 0) {
            indexOfSpaces = i;
            break;
        }
    }
    let numbers = 5;
    let spaces = 4;
    if (indexOfSpace) {
        thirdRow[indexOfSpace] = 1;
        numbers--;
    }
    for (let i = 0; i < 9; i++) {
        if (thirdRow[i] === 1) {
            continue;
        }
        else {
            if (numbers > 0 && spaces > 0) {
                let choice = Math.floor(Math.random() * 2);
                if (choice === 0) {
                    thirdRow[i] = 0;
                    spaces--;
                }
                else {
                    thirdRow[i] = 1;
                    numbers--;
                }
            }
            else if (numbers > 0) {
                thirdRow[i] = 1;
                numbers--;
            }
            else {
                thirdRow[i] = 0;
                spaces--;
            }
        }
    }
    return thirdRow;
}

const generateTemplate = () => {
    const firstRow = firstRowGenerator();
    const secondRow = secondRowGenerator(firstRow);
    const thirdRow = thirdRowGenerator(firstRow, secondRow);
    return [firstRow, secondRow, thirdRow];
}

generateTemplate().map(row => { console.log(row) })