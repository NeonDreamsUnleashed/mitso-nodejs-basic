import fs from 'fs/promises';
import { fileURLToPath } from 'url' 
import { dirname, join } from 'path'

const list = async () => {
        const __filename=fileURLToPath(import.meta.url)
        const __dirname=dirname(__filename)
        const path = join(__dirname, "files")
        try{
            const files = await fs.readdir(path)
            console.log(files)
        }catch(err){
            if(err.code === "ENOENT"){
                throw new Error("fs failed")
            }
            throw err
        }
};

await list();

