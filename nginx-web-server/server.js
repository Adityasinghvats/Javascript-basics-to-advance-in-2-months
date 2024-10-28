const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 8080;

const server = http.createServer((req,res) => {

    // __dirname is the directory name
    const filePath = path.join(__dirname, req.url === '/' ? 'index.html': req.url);
    // if the req is nameofDirectory + '/' serve the index.html else serve use the extension provided by url

    // for keeping an eye on the url provided
    console.log(filePath);
    
    const extName = String(path.extname(filePath).toLowerCase());

    // All types of files myserver can support , explicitly mentioned
    // if some server doesnot support a filetype it is due to this method
    const mimeTypes = {
        ".html": 'text/html',
        ".css": 'text/css',
        ".js": 'text/javascript',
    }

    // If the extension type is in mime then we return it
    // octet-stream is a generic file of binary type
    const contentType = mimeTypes[extName] || 'application/octet-stream';

    // Up until now we were handling the file now we will read and start serving it
    fs.readFile(filePath, (err, content) => {
        if(err){
            // Error NO ENTry
            if(err.code==="ENOENT"){
                res.writeHead(404, {'Content-Type': 'text/html'});
                res.end('404: File nahi mila bhai!!');
            }
        }else{
            // req/res is divided into 2 parts
            // head and body
            // head -> metadata, datatype of res
            // body -> content e.g. html,css,images
            res.writeHead(200, {'Content-Type': contentType});
            res.end(content, 'utf-8');
        }
    })
});

server.listen(port, () => {
    console.log(`Server is listening on port :${port}`);
})