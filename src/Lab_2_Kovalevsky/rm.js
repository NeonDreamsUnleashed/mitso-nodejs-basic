
import fs from "fs"
import path from "path"

export const rm = (currentDir,file)=>{
    const oldPath = path.join(currentDir,file)
    
    if(!fs.existsSync(oldPath)){
        throw new Error("Operation failed")
    }
    fs.unlinkSync(oldPath)
}