const fs = require('fs');

// fs.writeFile('example.txt', 'this is an example', error => console.error(error));

//create a file
fs.writeFile('example.txt', 'this is an example', (error) => {
    if (error){
        console.error(error)
    } else{
        console.log('file sucessfully created');
        //read a file
        fs.readFile('example.txt', 'utf8', (error, file) => {
            if(error){
                console.error(error)
            } else {
                console.log(file);
            }
        });
    }
});

//rename file
fs.rename('example.txt', 'log.txt', error => {
    if (error){
        console.error(error)
    } else{
        console.log('file sucessfully renamed');
    }
});

//add to file
fs.appendFile('log.txt', 'some data being appended', error => {
    if (error){
        console.error(error)
    } else{
        console.log('data sucessfully appended to file');
    }
});

//delete file
fs.unlink('log.txt', error => {
    if (error){
        console.error(error)
    } else{
        console.log('sucessfully deleted the file');
    }
});