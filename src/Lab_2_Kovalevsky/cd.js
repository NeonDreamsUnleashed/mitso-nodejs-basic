import fs from "fs"
import path from "path"

export const cd = (currentCdDir, pathArg) =>{
    const newPath = path.resolve(currentCdDir,pathArg)

    if(!fs.existsSync(newPath)){
        throw new Error("Operation failed")
    }
    if(!fs.statSync(newPath).isDirectory()){
        throw new Error("Operation failed")
    }
    return newPath
}