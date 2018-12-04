function diagonalDifference(arr) {
    let diagonalIndex = 0;
    let sumDiagonal1 = 0;
    for (let i in arr) {
        sumDiagonal1 = sumDiagonal1 + arr[i][diagonalIndex];
        diagonalIndex = diagonalIndex +  1;
    }

    diagonalIndex = arr[0].length -1;
    let sumDiagonal2 = 0;
    for (let i in arr) {
        sumDiagonal2 = sumDiagonal2 + arr[i][diagonalIndex];
        diagonalIndex = diagonalIndex - 1;
    }

    return Math.abs(sumDiagonal1 - sumDiagonal2);
}
