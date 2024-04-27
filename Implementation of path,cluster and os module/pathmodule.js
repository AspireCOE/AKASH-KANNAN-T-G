const path=require('path')
console.log(path.sep)
const filepath=path.join("/content","subfolder","sample.txt")
console.log(filepath)
const base=path.basename(filepath)
console.log(base)
const filename={dir:"\\dir3\\dir2",base:"text.txt"};
const exactPath=path.format(filename);
console.log(exactPath);
