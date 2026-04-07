const parseArgs = () => {
    const args = process.argv.slice(2)
    for(let i=0; i < args.lenght; i+=2){
        const key = args[i]
        const value = args[i+1]  

        const clean = key.replace("--","")
        const str = `${clean} is ${value}`
        return str
    }
    console.log(str)
    

    
};

parseArgs();