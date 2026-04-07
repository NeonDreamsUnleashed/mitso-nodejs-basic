
import fs from 'fs/promises';
import { fileURLToPath } from 'url' 
import { dirname, join } from 'path'
const read = async () => {
       const __filename=fileURLToPath(import.meta.url)
       const __dirname=dirname(__filename)
       const path = join(__dirname, "files", "fileToRead.txt")

       try{
        const content = await fs.readFile(path,"utf-8")
        console.log(content)
       }catch(err){
        if(err.code === "ENOENT"){
        throw new Error("FS operation failed")
        }
        throw err
       }
       
       
};

await read();