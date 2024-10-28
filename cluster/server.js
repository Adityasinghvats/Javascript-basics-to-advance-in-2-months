const os = require("os");
const cluster = require("cluster");

const totalcpu = os.cpus().length;

console.log(totalcpu);

if(cluster.isPrimary){
    for(let i=0;i<totalcpu;i++){
        // create worker threads leaving only one as primary for distributing load
        cluster.fork();
    }
    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
      });
}else{
    // express app
    console.log(`Worker ${process.pid} started`);
}