import fs from 'fs';
import path from 'path';
import { createHash } from 'crypto';


export const hashCalc=(currentDir,file)=>{
    const pathF = path.join(currentDir,file)
    const stat = fs.statSync(pathF)
    if(!stat.isFile()){
        throw new Error("OPeration failed")
    }
    const hash = createHash("sha256")
    const stream = fs.createReadStream(pathF)
    stream.on("data",chunk=>{
        hash.update(chunk)
    })
    stream.on("end",()=>{
        console.log(hash.digest("hex"))
    })
    stream.on("error",()=>{
        throw new Error("Operation failed")
    })
}