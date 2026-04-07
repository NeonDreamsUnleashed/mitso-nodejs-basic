
import fs from "fs"
import path from "path"

export const rename = (currentDir,file,newFile)=>{
    const oldPath = path.join(currentDir,file)
    const newPath = path.join(currentDir,newFile)
    if(!fs.existsSync(oldPath)){
        throw new Error("Operation failed")
    }
    fs.renameSync(oldPath,newPath)
}