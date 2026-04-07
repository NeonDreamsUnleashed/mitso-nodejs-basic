import os from "os"
import { username } from "./utils.js"
import { up } from "./up.js"
import { cd } from "./cd.js"
import { ls } from "./ls.js"
import { cat } from "./cat.js"
import { add } from "./add.js"
import { rename } from "./rename.js"
import { rm } from "./rm.js"
import { cp } from "./cp.js"
import { mv } from "./mv.js"
import chalk from "chalk"
import { hashCalc } from "./hash.js"
import { compress } from "./compress.js"
import { decompress } from "./decompress.js"

let currentDir = os.homedir()
const getUserName = username()

console.log(chalk.green(`❖Welcome to the File Manager, ${getUserName}!`))
console.log(chalk.green(`❖ You are currently in, ${currentDir}!`))
 process.on("SIGINT",()=>{
        console.log(chalk.green(`\n❖ Thank you for using File Manager, ${getUserName}, goodbye!`))
        process.exit()
    })
process.stdin.on("data",(data)=>{
    const info = data.toString().trim()
    const [command , pathArg1 , pathArg2] = info.split(" ")
const commands = {
  up: () => currentDir = up(currentDir),
  cd: () => currentDir = cd(currentDir, pathArg1),
  ls: () => ls(currentDir),
  cat: () => cat(currentDir, pathArg1),
  add: () => add(currentDir, pathArg1),
  renmane: () => rename(currentDir, pathArg1, pathArg2),
  rm: () => rm(currentDir, pathArg1),
  cp:()=>cp(currentDir,pathArg1,pathArg2),
  mv:()=>mv(currentDir,pathArg1,pathArg2),
  hash:()=>hashCalc(currentDir,pathArg1),
  compress:()=>compress(currentDir,pathArg1,pathArg2),
  decompress: () => decompress(currentDir, pathArg1, pathArg2),
  os: ()=>{
    if(pathArg1 === "--EOL") console.log(JSON.stringify(os.EOL))
        else if(pathArg1 === "--cpus"){
        const cpus = os.cpus()
        console.log(`Cpus:${cpus.length}`)
        cpus.forEach(cpu=>{
            console.log(`Model:${cpu.model}`)
            console.log(`Ghz:${cpu.speed}`)
        })
        }
        else if(pathArg1 === "--homedir"){
            console.log(os.homedir())
        }
        else if(pathArg1 === "--username"){
            console.log(os.userInfo().username)
        }
        else if(pathArg1 === "--architecture"){
        console.log(os.arch())
        }
  }
  
  
  
}
    if(command === ".exit"){
        console.log(chalk.green(`❖ Thank you for using File Manager, ${getUserName}, goodbye!`))
        process.exit()
    }
if(commands[command]){
    commands[command]()
}else{
    console.log("Invalid input")
}



   console.log(chalk.green(`Your are currently in ${currentDir}`))


})