import fs from "fs"
import { dirname,join } from "path";
import { fileURLToPath } from "url";
const read = async () => {
    const filename = fileURLToPath(import.meta.url)
    const __dirname = dirname(filename)
    const path = join(__dirname,"fileToRead.txt")

    const stream = fs.createReadStream(path)

    stream.pipe(process.stdout)
    stream.on("error", err=>{
        if(err.code === "ENOENT"){
            throw new Error("FS operation failed")
        }
        throw err
    })
};

await read();