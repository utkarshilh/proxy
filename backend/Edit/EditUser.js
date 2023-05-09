const express=require("express");
var db = require('../sqlCredentials')
const router=express.Router()




// to get the details of all users--->
router.get("/api/get", (req,res)=>{
    const sqlGet="SELECT*FROM loginpage";
    db.query(sqlGet,(error,result)=>{
        res.send(result);
    });
});




//To update the data of users-->
router.put("/api/update/:empId", (req,res)=>{
    const{empId} =req.params;
    const {name,Email, ContactNo}=req.body;
    const sqlUpdate="UPDATE loginpage SET name = ?, Email=?, ContactNo=? WHERE empId = ?";
    db.query(sqlUpdate, [name,  Email, ContactNo,  empId], (error,result)=>{
        if(error){
            console.log(error);
        }
        
        res.send(result);
        
    });
 });
 



//To delete the user-->
router.delete("/api/remove/:empId",(req,res)=>{
    const{empId}=req.params;
    const sqlRemove="DELETE FROM loginpage WHERE  empId=?";
    db.query(sqlRemove,empId,(error, result)=>{
        if(error){
           
            console.log(error);
        }
       
    });
});




// to view the details of a particualr users-->
router.get("/api/get/:empId", (req,res)=>{
    const{empId} =req.params;
    const sqlGet="SELECT*FROM loginpage WHERE empId=?";
    db.query(sqlGet, empId, (error,result)=>{
        if(error){
            console.log(error);
        }
        res.send(result);
    });
 });





 

//To search the user either of one -->
router.get('/search/:query', (req, res) => {
    const query = req.params.query; // Get search query from URL parameter
    const sql = `SELECT * FROM loginpage WHERE name LIKE '%${query}%'`; // Construct SQL query
    db.query(sql, (err, results) => { // Execute SQL query
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
        return;
      }
      res.json(results); // Return results as JSON
    });
  });
  router.get('/search', function(req, res){
    var name=req.query.name;
    confirm.connect(function(error){
        if(error)console.log(error);
        var sql="select*from loginpage where name Like '%"+name+"%' ";
        confirm.query(sql, function(error, result){
          if(error)console.log(error);
          res.render(__dirname+"/search-students",{loginpage:result});
        });
    })
});

module.exports= router