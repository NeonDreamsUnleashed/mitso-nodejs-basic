import fs from "fs"
import path from "path"

export const decompress = (currentCdDir,file,zlibFDir)=>{
    const path = path.join(currentCdDir,file)
    const stat = fs.statSync(path)
    if(!stat.isFile()){
        throw new Error("Opeation failed")
    }
    const fileBr = path.basename(file,".br")
    const zLib = path.join(zlibFDir,fileBr)
    const writeStr = fs.createWriteStream(path)
    const brotoli = fs.createBrotleCompress(zLib)
    read.pipe(brotoli).pipe(writeStr)
    readStream.on("error", () => {
    throw new Error("Operation failed")
    })
  writeStream.on("error", () => {
    throw new Error("Operation failed")
  })
}