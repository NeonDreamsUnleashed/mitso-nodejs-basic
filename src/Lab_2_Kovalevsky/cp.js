import fs from "fs"
import path from "path"
export const cp = (currentDir,file,newDir)=>{
 
    const oldPath = path.join(currentDir,file)
    if (!fs.existsSync(oldPath) || !fs.existsSync(newDir)) {
    throw new Error("Operation failed")
    }
    const stat = fs.statSync(oldPath)
    if(!stat.isFile()){
        throw new Error("Operation failed")
    }    
    const fileCopy= path.basename(oldPath)
    const newDirCopy = path.join(newDir,fileCopy)

    const readStr = fs.createReadStream(oldPath)
    const writeStr = fs.createWriteStream(newDirCopy)
    readStr.pipe(writeStr)
    readStr.on("error",()=>{
        throw new Error("Operation failed")
    })
    writeStr.on("error",()=>{
    throw new Error("Operation failed")
    })
}