
const express=require("express");
const bodyParser=require("body-parser");
const nodemailer=require("nodemailer");

const app=express();
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html")
})

app.get("/shop.html",function(req,res){
    res.sendFile(__dirname+"/shop.html")
})

app.get("/product.html",function(req,res){
    res.sendFile(__dirname+"/product.html")
})

app.get("/checkout.html",function(req,res){
    res.sendFile(__dirname+"/checkout.html")
})

app.get("/contact.html",function(req,res){
    res.sendFile(__dirname+"/contact.html")
})
app.post("/contact.html",function(req,res){
    var Name=req.body.name;
    var Email=req.body.email;
    var Cmt=req.body.comment;
    console.log(Cmt);
var transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:"tensuabita0@gmail.com",
        pass:""
    }

})
var mailOption ={
    from:Email,
    to:"tensuabita0@gmail.com",
    replyTo:Email,
    subject:Name,
    Text:Cmt
}
transporter.sendMail(mailOption,function(error,info){
if(error){
    console.log(error);
}else{
    console.log("email sent: " +info.response);
}
})

})

app.listen(8080,function(){
    console.log("server running on port 8080");
})