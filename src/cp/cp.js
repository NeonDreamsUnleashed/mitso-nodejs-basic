const spawnChildProcess = async (args) => {
        const __filename = fileURLToPath(import.meta.url)
        const __dirname = dirname(_filename)
    
        const path = join(__dirname,"files","script.js")
        const child = spawn("node",[path,...args])

        process.stdin.pipe(child.stdin)
        child.out.pipe(process.stdout)
};


spawnChildProcess( /* [someArgument1, someArgument2, ...] */);


