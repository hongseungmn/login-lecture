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

    console.log(req);
};