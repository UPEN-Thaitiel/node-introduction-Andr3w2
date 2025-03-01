// import fs module
const fs = require(node.fs)
//Using fs module create a file called message.txt and write a message in there

fs.writeFile("message.txt", "hello world", (err) => {
    if (err) throw err;
    console.log("The file was created");
})

//Using fs module read the  file creatd and ans show the output in the terminal

fs.readFile("message.txt", "uft8", (err, data) => {
    if (err) throw err;
    console.log(data);
})