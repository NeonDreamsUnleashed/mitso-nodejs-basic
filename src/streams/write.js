import { createWriteStream } from "fs"
import { dirname,join } from "path";
import { fileURLToPath } from "url";
const write = async () => {
    const filename = fileURLToPath(import.meta.url)
    const __dirname = dirname(filename)
    const path = join(__dirname,"fileToWrite.txt")

    const writeS = createWriteStream(path)
        writeS.on("error", err=>{
        if(err.code === "ENOENT"){
            throw new Error("FS operation failed")
        }
        throw err
    })
    process.stdin.pipe(writeS)
};

await write();