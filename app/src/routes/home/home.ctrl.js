"use strict"

const home = (req,res)=> {
    res.render("home/index");

};

const login = (req,res) => {
    res.render("home/login");
}

module.exports = {
    home : home,   // Object는 key : value로 구성되어 있는데 key값만 넣어주면 된다면 key값을 자동으로 대입하게 된다.
    login : login,
};