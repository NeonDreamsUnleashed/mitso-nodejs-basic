import fs from "fs"
import path from "path"

export const cat = (currentDir,pathArg) =>{
    const fullPath = path.join(currentDir,pathArg)
  if(!fs.existsSync(fullPath)){
    throw new Error("Operation Failed")
  }

  const start = fs.statSync(fullPath)
  if(!start.isFile()){
    throw new Error("Operation failed")
  } 

  const stream = fs.createReadStream(fullPath)
  stream.pipe(process.stdout)
  stream.on("error",()=>{
    console.log("Operation failed")
  })
    
}