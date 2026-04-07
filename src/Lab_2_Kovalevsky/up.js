import fs from "fs"
import { dirname,join } from "path";
import { fileURLToPath } from "url";
import path from "path"

export const up = (currentDir) =>{
    const parent = path.dirname(currentDir)
    if(parent !== currentDir){
        currentDir = parent
    }
    return currentDir
}