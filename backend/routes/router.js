const express = require("express");
const router = new express.Router();
var db = require('../sqlCredentials')
const multer = require("multer");
//const moment=require("moment")
const jwt = require('jsonwebtoken')


const cors = require("cors");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require("express-session");
const bcrypt = require('bcrypt')
const saltRound = 10
router.use(express.json());
router.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
}));
router.use(cookieParser())




//image storage config-->
var imgconfig = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "./uploads");
    },
    filename: (req, file, callback) => {
        callback(null, `image-${Date.now()}.${file.originalname}`)
    }
});
//img filter-->
const isImage = (req, file, callback) => {
    if (file.mimetype.startsWith("image")) {
        callback(null, true)
    } else {
        callback(null, Error("only image is allow"))
    }
}
var upload = multer({
    storage: imgconfig,


    fileFilter: isImage
})


//Registration of user-->
router.post('/api/setUser', upload.single("photo"), (req, res) => {

    console.log(req.body)

    const empId = req.body.empId;
    const name = req.body.name;
    const password = req.body.password;
    const role = req.body.role;
    const Email = req.body.Email;
    const Gender = req.body.Gender;
    const Department = req.body.Department;


    const ContactNo = req.body.ContactNo;

    const { filename } = req.file;
    const { dateOfJoining } = req.body.dateOfJoining;
    

    bcrypt.hash(password, saltRound, (err, hash) => {
        if (err)
            console.log(err)
        const sqlRegister = "INSERT INTO proxy.loginPage (empId, name ,password,role,Email, Gender, Department, ContactNo, userimg, dateOfJoining) VALUES(?,?,?,?,?,?,?,?,?,?)";
        db.query(sqlRegister, [empId, name, hash, role, Email, Gender, Department, ContactNo, filename, dateOfJoining], (err, result) => {
            if (err)

                console.log(err)
            else {
                console.log("data added")
                res.status(201).json({ status: 201, data: req.body })
            }
        })
    })
})

//Get the user based on their id-->
router.get("/getdata/:empId", (req, res) => {

    const empId = req.params.empId;
    //const empId=12345;
    try {
        db.query("SELECT*FROM loginPage WHERE empId=?", [empId], (error, result) => {
            if (error) {
                console.log("error")
            } else {
                console.log("data get")
                res.status(201).json({ status: 201, data: result })
            }
        })
    } catch (error) {
        res.status(422).json({ status: 422, error })
    }

})





//Login-->
router.post('/api/login', (req, res) => {
    const userName = req.body.username;
    const password = req.body.password;
    const status = req.body.status;
    const sqlLogin = "select * from loginPage where empId = ? and role = ?"
    db.query(sqlLogin, [userName, status], (err, result) => {
        if (err) {
            console.log("sql error")
            console.log({ err: err });
        }
        if (result.length > 0) {
            bcrypt.compare(password, result[0].password, (err, response) => {
                if (response) {
                    const name = result[0].empId;
                    const name2 = result[0].role;
                    const token = jwt.sign({ name, name2 }, 'jwt-secret-key', { expiresIn: '1d' });
                    // res.cookie('token',token);
                    // res.send(result);
                    res.cookie('token', token, { httpOnly: true, secure: true, sameSite: 'none' });
                    res.status(200).send(result);
                    console.log(" You are login now .." + JSON.stringify(name, name2));



                }
                else {

                    res.send({ message: "something went wrong" });
                }
            })
        }
        else {
            res.send({ message: "user doesn't exists" })
        }


    })

})

//To varify token from the frontend-->
/*const verifyUser=(req, res, next)=>{
    const a=req.cookies.token;
    if(!a){
        return res.json({Error:"you are not authenticated"});
    }else{
        jwt.verify(a,"jwt-secret-key", (err, decoded)=>{
            if(err){
                return res.json({Error:"Token is not ok"});
            }
            else{
               
                req.username = decoded.name;
                console.log(" I am here from frontend " + JSON.stringify(a));
                next();
               // console.log(" I am here from frontend " + JSON.stringify(req.username));
               // console.log(" I am here from backend" + JSON.stringify(decoded.name));
                
            }
        })des
    }
}*/



const verifyUser = (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    try {
        const decoded = jwt.verify(token, 'jwt-secret-key');
        req.empId = decoded.name;
        req.role = decoded.name2;
        console.log('Token verified successfully yaha pe');
        console.log(" I am here from backend1" + JSON.stringify(decoded.name));
        console.log(" I am here from backend3" + JSON.stringify(decoded.name2));
        console.log(" I am here from backend2" + JSON.stringify(req.empId));
        next();
    } catch (err) {
        console.log('Error while verifying token:', err);
        return res.status(401).json({ error: 'Unauthorized' });
    }
};





const hello2 = (empId) => {
    router.get("/getdata", (req, res) => {

        //const empId=req.params.empId;
        //const empId=12345;
        // const empId=empId;
        try {
            db.query("SELECT*FROM loginPage WHERE empId=?", [empId], (error, result) => {
                if (error) {
                    console.log("error")
                } else {
                    console.log("data get in backend " + result)
                    console.log(" You are in verify now .." + JSON.stringify(result[0].name));
                    //  res.send(result);
                    res.status(201).json({ status: 201, data: result })
                    //  res.status(201).json({data:result})
                    //console.log(" You are in verify now .." + JSON.stringify(result));

                }
            })
        } catch (error) {
            res.status(422).json({ status: 422, error })
        }

    })
}


const hello = () => {
    router.get("/api/get", (req, res) => {
        const sqlGet = "SELECT*FROM loginpage";
        db.query(sqlGet, (error, result) => {
            res.send(result);
        });
    });
};




router.get('/x', verifyUser, (req, res) => {

    //const empId=12345;
    // const token = req.cookies.token;
    //return res.json({Status:"Success", name:req.username});
    res.json({ Status: "Success", name: req.empId, name2: req.role });
    // res.json({username:req.username});
    console.log('your data are-->' + req.empId);
    console.log('your data are-->' + req.role);
    const empId = req.empId;
    hello();
    // hello2(empId);




})






module.exports = router;