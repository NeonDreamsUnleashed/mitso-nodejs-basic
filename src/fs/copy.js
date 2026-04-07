import fs from 'fs/promises';
import { fileURLToPath } from 'url' 
import { dirname, join } from 'path'
const copy = async () => {
      const __filename=fileURLToPath(import.meta.url)
      const __dirname=dirname(__filename)
      const path = join(__dirname, "files")
      const path_copy = join(__dirname, "files_copy")

try{
   await fs.access(path)
   try{
      await fs.access(path_copy)
      throw new Error("Fs failed")
   }catch(err){
      if(err.code !== "ENOENT"){
         throw err
      }
      
   }
   await fs.cp(path,path_copy,{recursive:true})
} catch(err){
   if(err.code === "ENOENT"){
      throw new Error("Fs failed")
   }
   throw err
   
}
};

await copy();
