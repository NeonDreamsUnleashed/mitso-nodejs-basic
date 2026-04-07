import fs from "fs"
import path from "path"

export const compress = (currentCdDir,file,zlibFDir)=>{
    const path = path.join(currentCdDir,file)
    const stat = fs.statSync(path)
    if(!stat.isFile()){
        throw new Error("Opeation failed")
    }
    const fileBf = path.basename(path)+".br"
    const zlibF = path.join(zlibFDir,fileBf)
    const read = fs.createReadStream(path)
    const writeStr = fs.createWriteStream(zlibF)
    const brotoli = fs.createBrotleCompress()
    read.pipe(brotoli).pipe(writeStr)
    readStream.on("error", () => {
    throw new Error("Operation failed")
    })
  writeStream.on("error", () => {
    throw new Error("Operation failed")
  })
}