 
const mongoose=require("mongoose");

const DB="mongodb+srv://Uttam:Uttam@cluster0.frg0nvv.mongodb.net/Authusers?retryWrites=true&w=majority";
mongoose.connect(DB,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>console.log("DataBase Connected ")).catch((errr)=>{
    console.log(errr)
})                