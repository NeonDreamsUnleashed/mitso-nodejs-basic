import fs from 'fs/promises';
import { fileURLToPath } from 'url' 
import { dirname, join } from 'path'

const create = async () => {
   const __filename=fileURLToPath(import.meta.url)  
   const __dirname=dirname(__filename)
   const path = join(__dirname, "files", "fresh.txt")
try{
await fs.writeFile(path,"I am fresh",{flag:"wx"})
} catch (err){
   if(err.code === "EEXIST"){
   throw new Error ("FS operation failed")
   }
   throw err
}


}
await create();
