const parseEnv = () => {
   console.log(Object.entries(process.env).filter(([key]) => key.startsWith("MITSO_")).map(([key,value]) => `${key}=${value}`).join("; "))
};

parseEnv();