function printBox(height, width) {
    let row = '';
    for (let count=0; count < width; count ++){
        row += '*';
    }
    console.log(row);
    let hollowrow = '';
    for (let count=0; count < width - 2; count ++) {
        hollowrow += ' ';
    }
    for (let count=0; count < height - 2; count ++) {
        console.log('*' + hollowrow + '*'); 
    }
    console.log(row);

}

printBox(7, 5);