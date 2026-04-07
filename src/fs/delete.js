import fs from 'fs/promises';
import { fileURLToPath } from 'url' 
import { dirname, join } from 'path'
const remove = async () => {
        const __filename=fileURLToPath(import.meta.url)
        const __dirname=dirname(__filename)
        const path = join(__dirname, "files", "fileToRemove.txt")


         try{
           await fs.unlink(path)
         }catch(err){
            if(err.code === "ENOENT"){
                throw new Error("fs failed")
            }
            throw err
         }
        
};

await remove();