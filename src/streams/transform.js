import { Transform } from "transform"
const transform = async () => {
    const reveseStream = new Transform({
        transform(chunk,callback){
            const reversed = chunk.toString().split("").reverse().join("")
            callback(null,reversed)
        }
    })
    process.stdin.pipe(reveseStream).pipe(process.stdout)
};

await transform();