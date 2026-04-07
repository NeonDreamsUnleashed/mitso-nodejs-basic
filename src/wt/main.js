import os from "os"
import { Worker } from "worker_threads"
const performCalculations = async () => {
const cores = os.cpus().length

const runWorkers = (value) =>{
    return new Promise((resolve)=>{
        const worker = new Worker ("./main.js")

        worker.postMessage(value)

        worker.on("message", (result)=>{
            resolve({status:"resolved" , data: result})
        })

        worker.on("error", ()=>{
            resolve({status:"error", data: null})
        })
    })

}
    const main = async () =>{
        const workers = []

        for (let i=0; i < cores ; i++){
            workers.push(runWorkers(10 + i))
        }

        const result = await Promise.all(workers)
        console.log(result)
        console.log(result.length)
    }
await main()
};

await performCalculations();