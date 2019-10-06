const https = require('https');
const http = require('http');

const listURL = 'https://api.bilibili.com/x/player';
const viewURL = 'https://api.bilibili.com/x/web-interface';
// console.log(myURL);

http.createServer((proxyReq, proxyRes) => {
    listUrl = listURL + proxyReq.url;
    https.get(listUrl, (res) => {
        let result = '';
        res.on('data', (d) => {
            result += d;
        });
        res.on('end', () => {
            proxyRes.writeHead(200);
            proxyRes.end(result);
        });
    });
}).listen(8000);

http.createServer((proxyReq, proxyRes) => {
    console.log(proxyReq);
    viewUrl = viewURL + proxyReq.url;
    https.get(viewUrl, (res) => {
        let result = '';
        res.on('data', (d) => {
            result += d;
        });
        res.on('end', () => {
            proxyRes.writeHead(200);
            proxyRes.end(result);
        });
    });
}).listen(8001);

// https://api.bilibili.com/x/web-interface/view?aid=20339838&cid=33231944