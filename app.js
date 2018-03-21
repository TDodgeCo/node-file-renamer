const fs = require('fs');

function renameFiles(directory, newName, fileType) {
  fs.readdir(directory, (err, files) => {
    num = 1;
    files.forEach(file => {
      fs.rename(directory + file, directory + newName + num + fileType, function (err) {
        if (err) {
          console.log(err)
        }
      })
      num++
    })
  })
}

renameFiles('./castle-rock-frames/', 'castle-rock-frames-', '.jpg')
