var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var StudentSchema=new Schema({
    name: String,
    rollNo: {
        type: Number,
        unique: true,
    }
});

module.exports=mongoose.model('Student',StudentSchema);