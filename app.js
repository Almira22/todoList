const express=require("express");
const bodyParser=require("body-parser");
const serveStatic = require("serve-static");
const app = express();
const date = require(__dirname+"/date.js");
var items = [];
var workItems=[];
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("view engine", "ejs");



app.get("/",(req,res)=>{
   //date.getDay will choose which of the exported modules to use.
    let day = date.getDay();

    res.render("list",{listTitle:day,newListItems:items});
});

app.post("/",function(req,res){

    var item = req.body.next;
    var workItem = req.body.list;
    if(workItem==="work"){
        workItems.push(item);
        res.redirect("/work");
    }
        else{
            items.push(item);
            res.redirect("/");
        }
    

});
app.get("/work",(req,res)=>{
    res.render("list",{listTitle:"Work List",newListItems:workItems}); 
});

app.listen(3000,function(){
    console.log("Server has started at 3000");
});