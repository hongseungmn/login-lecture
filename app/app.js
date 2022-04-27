// const http = require("http");
// const app = http.createServer((req,res)=> {
//     res.writeHead(200,{"Content-Type": "text/html; charset=utf-8"});
//     console.log(req.url);
    
//     if(req.url === "/") {
//         res.end("여기는 루트입니다.");
//     }
//     else if (req.url === "/login") {
//         res.end("여기는 로그인 화면입니다");
//     }
// });
// //node express 를 사용하지 않으면 코드가 굉장히 복잡해진다.

// app.listen(3001,()=> {
//     console.log("This server is operate bt HTTP");
// });

//모듈
const express = require("express");
const app = express();


const home = require("./src/routes/home")


//앱 세팅
app.set("views","./src/views");
app.set("view engine","ejs");
app.use(express.static(`${__dirname}/src/public`))

//라우팅

app.use("/",home);  //use -> 미들웨어를 등록해주는 메서드

module.exports = app;
