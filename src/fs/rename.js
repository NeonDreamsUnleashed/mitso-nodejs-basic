import fs from 'fs/promises';
import { fileURLToPath } from 'url' 
import { dirname, join } from 'path'
const rename = async () => {
       const __filename=fileURLToPath(import.meta.url)
       const __dirname=dirname(__filename)
       const oldPath = join(__dirname, "files", "WrongFilename.txt")
       const newPath = join(__dirname, "files", "NewFilename.md")

       try{
         await fs.access(oldPath)
       } catch(err){
        if(err.code === "ENOENT"){
            throw new Error("fs failed")
        }
        throw err
       }

        try{
         await fs.access(newPath)
          throw new Error("fs failed")
       } catch(err){
        if(err.code !== "ENOENT"){
            throw err
        }
        
       }

      await fs.rename(oldPath,newPath)
};

await rename();