"use strict";

//DOM -> html에 존재하는 값을 단순히 자바스크립트에서 제어할 수 없지만 이를 가능하게 해주는 것이
// DOM객체이다. 문서 객체모델

const id = document.querySelector("#id"),
pwd = document.querySelector("#pwd"),
loginBtn = document.querySelector("button");
console.log(id);
console.log("hello");

loginBtn.addEventListener("click",login);

function login() {
    const req = {
        id: id.value,
        pwd: pwd.value,
    };

    console.log(req,JSON.stringify(req));

    fetch("/login",{ //json객체는 문자열로 감싸져 있다
        method:"POST", //body를 통해서 전달할 때는 http메서드 중에서 POST
        headers:{
            "content-Type" : "applecation/json" 
        },
        body:JSON.stringify(req)
    });
};


/*
Restful API란?
-> REST API 메시지를 읽는 것 만으로도 메시지가 의도하는 바를 명확하게 파악
-> 기본적으로 HTTP를 사용하여 요청 및 응답 처리
-> HTTP 인프라를 그대로 사용하기 때문에, REST API 사용을 위한 별도의 인프라 구축이 필요 없다
-> 클라이언트와 서버가 독립적으로 운영이 가능하다.(클라이언트가 리소스를 요청하면, 서버는 해당 리소스를 응답해주기만 하면 된다)


Rest란?
분산 시스템 설계를 위한 아키텍쳐 스타일 = 사이트 구성 원리
자원의 표현을 가지고 상태를 전달한다.
모든 동작은 Method로 나타낸다
GET 조회
POST 생성
PUT 수정
DELETE 삭제

*/