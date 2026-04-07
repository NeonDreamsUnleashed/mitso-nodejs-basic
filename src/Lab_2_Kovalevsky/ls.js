import path from "path"
import fs from "fs"

export const ls = (currentDir) =>{
    const items = fs.readdirSync(currentDir)

    const result = items.map((item)=>{
        const fullPath = path.join(currentDir,item)
        const stats = fs.statSync(fullPath)
        return {
            name:item,
            type:stats.isDirectory() ? "Directory" : "File"
        }
        
    })
    result.sort((a,b)=>{
        if(a.type !== b.type){
            return a.type === "Directory" ? -1:1
        }
        return a.name.localeCompare(b.name)
    })

    console.table(result)
}