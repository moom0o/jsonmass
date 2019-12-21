// TYPE YOUR MESSAGE DIRECTORY HERE
let message_directory = "./data/firstwordsmsgs/"
// TYPE YOUR MESSAGE TIME DIRECTORY HERE
let message_time = "./data/firstwordstime/"
// TYPE YOUR NEW DATA DIRECTORY HERE
let new_data = "./newdata/firstwords/"


















































const fs = require("fs")
const dirname = "./data"
function readFiles(dirname, onFileContent, onError) {
  fs.readdir(message_directory, function(err, filenames) {
    filenames.forEach(function(filename) {
        try{

      fs.readFile(message_directory + filename, 'utf-8', function(err, content) {
          if(err){
              console.log(err)
          }
          try{
               var timea = JSON.parse(fs.readFileSync(`${message_time}${filename}`, 'utf-8'))
          }
          catch(error) {
              console.log(error)
          }
          try{
var student = { 
    message: JSON.parse(content),
    time: timea
};
          }
          catch(error) {
              console.log(error)
          }
 
let data = JSON.stringify(student);
fs.writeFileSync(new_data + filename, data);
        console.log(`wrote ${filename} ` + data)
        
        
      });
    }
    catch(error) {
        console.error(error);
        // expected output: ReferenceError: nonExistentFunction is not defined
        // Note - error messages will vary depending on browser
      }
});
  });
}
readFiles()
