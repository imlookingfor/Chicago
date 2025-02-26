const http = require("http");
const fs = require("fs");
const path = require("path");
const port = 5173;

const mimeTypes = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "text/javascript",
  ".jsx": "text/javascript",
  ".gif": "image/gif",
  ".png": "image/png",
  ".mp4": "video/mp4",
  ".json": "text/json",

};


const server = http.createServer((req, res) => {
  const filePath = path.join(
    process.cwd(),
    req.url === "/" ? "index.html" : req.url
  );
  const extName = path.extname(filePath).toLowerCase();



  const contentType = mimeTypes[extName] || "application/octet-stream";  

  console.log("filePath::: ", filePath);
  console.log("__dirname:::", __dirname);
  console.log("contentType:::", contentType);

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");


  fs.readFile(filePath, (err, content) => {
    if(err) {
      if(err.code === "ENOENT") {
        console.error(`[ERROR] 파일 없음: ${filePath}`);
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("<h1>404 - Page Not Found</h1>");

      } else {
        console.error(`[ERROR] 서버 오류: ${err.code}`);
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end(`Server error: ${err.code}`);

      };

    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content);

    };

  });

});


server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);

});




