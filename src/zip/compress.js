import { createReadStream, createWriteStream } from "fs"
import { createGzip } from "zlib"
import { dirname, join } from "path"
import { fileURLToPath } from "url"
const compress = async () => {
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = dirname(_filename)

    const source = join(__dirname,"fileToCompress.txt")
    const sourceGz = join(__dirname,"archive.gz")

    const readSource = createReadStream(source)
    const writeGz = createWriteStream(sourceGz)
    const gzip = createGzip()

    readSource.on("error",handleErr)
    writeGz.on("error",handleErr)

    readSource.pipe(gzip).pipe(writeGz)

    const handleErr = (err) =>{
        if(err.code === "ENOENT"){
        throw new Error("FS operation failed")
        }
        throw err
    }

};

await compress();