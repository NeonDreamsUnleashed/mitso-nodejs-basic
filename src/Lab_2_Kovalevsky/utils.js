import minimist from "minimist"

export const username = () =>{
    const args = minimist(process.argv.slice(2))
    return args.username || "Anon"
}