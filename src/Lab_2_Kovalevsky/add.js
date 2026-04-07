
import fs from "fs"
import path from "path"

export const add = (currentDir,newFile)=>{
    const fullPath = path.join(currentDir,newFile)
    if(!fs.existsSync(currentDir)){
        throw new Error("Operation failed")
    }
    fs.writeFileSync(fullPath,"",{flag: "wx"})
}