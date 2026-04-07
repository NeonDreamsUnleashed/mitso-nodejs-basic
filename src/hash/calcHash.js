import fs from 'fs/promises';
import { fileURLToPath } from 'url' 
import { dirname, join } from 'path'
import { createHash } from 'crypto';
const calculateHash = async () => {
    const filename = fileURLToPath(import.meta.url)
    const __dirname = dirname(filename)
    const path = join(__dirname,"fileToCalculateHashFor.txt")

    try{
       const data = await fs.readFile(path)
       const hash = createHash("sha256").update(data).digest("hex")

       console.log(hash)
    } catch(err){
        if(err.code === "ENOENT"){
            throw new Error("FS operation failed")
        }
        throw err
    }
    
};

await calculateHash();