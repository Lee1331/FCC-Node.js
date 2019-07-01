const fs = require('fs');

//make directory (a folder)
fs.mkdir('tutorial', error => {
    if (error){
        console.error(error);
    } else{
        // console.log('sucessfully created the folder');
        fs.writeFile('./tutorial/example.txt', '123', error => {
            if (error){
                console.error(error);
            } else{
                console.log('sucessfully created the file');
            }
        });    
    }
});

//remove file
fs.unlink('./tutorial/example.txt', error => {
    if (error){
        console.error(error)
    } else{
        console.log('sucessfully deleted the file');
        
        //remove directory
        fs.rmdir('tutorial', error => {
            if (error){
                console.error(error);
            } else{
                console.log('sucessfully removed the folder');
            }   
        });
    }
});

//read files in directory
fs.readdir('readExample', (error, files) => {
    if (error){
        console.error(error);
    } else{
        if (error){
            console.error(error);
        } else{
            console.log(files);
        }
    }  
});
