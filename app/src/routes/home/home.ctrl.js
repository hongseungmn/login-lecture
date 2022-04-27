"use strict"

const output = {
    home: (req,res)=> {
        res.render("home/index");
    
    },
    
    login: (req,res) => {
        res.render("home/login");
    },
};

const users = {
    id: ["woorim","sem50000","홍성민"],
    pwd: ["1234","1234","123456"]
};



const process = {
    login: (req,res) => {
        const id = req.body.id;
        const pwd = req.body.pwd;
        console.log(req.body);


        if(users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if(users.pwd[idx] === pwd) {
                return res.json({
                    success: true,
                });
            }
        };

        return res.json({
            success: false,
            msg: "로그인에 실패하셨습니다.",
        })
    },

};

module.exports = {
    output: output,   // Object는 key : value로 구성되어 있는데 key값만 넣어주면 된다면 key값을 자동으로 대입하게 된다.
    process,
};