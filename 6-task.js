function landPerimeter(arr) {
    let perimeter = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === 'X') {
                if (i === 0 || arr[i - 1][j] === 'O') {
                    perimeter++;
                }
                if (i === arr.length - 1 || arr[i + 1][j] === 'O') {
                    perimeter++;
                }
                if (j === 0 || arr[i][j - 1] === 'O') {
                    perimeter++;
                }
                if (j === arr[i].length - 1 || arr[i][j + 1] === 'O') {
                    perimeter++;
                }
            }
        }
    }

    return "Total land perimeter: " + perimeter;
}