import { createReadStream, createWriteStream } from "fs"
import { createGunzip } from "zlib"
import { dirname, join } from "path"
import { fileURLToPath } from "url"
const decompress = async () => {
       const __filename = fileURLToPath(import.meta.url)
    const __dirname = dirname(_filename)

    const sourceGz = join(__dirname,"fileToCompress.txt")
    const source = join(__dirname,"archive.gz")

    const readSource = createReadStream(source)
    const writeGz = createWriteStream(sourceGz)
    const gunzip = createGunzip()

    readSource.on("error",handleErr)
    writeGz.on("error",handleErr)

    readSource.pipe(gunzip).pipe(writeGz)

    const handleErr = (err) =>{
        if(err.code === "ENOENT"){
        throw new Error("FS operation failed")
        }
        throw err
    }
};

await decompress();