const route = require('express').Router();
const data = require('./data');

// route.post('/createStudent',(req, res)=>{
//     data.createStudent(req.body).then((student)=>{
//             res.status(200).send('Student created : ' + student);
//     }).catch((error)=>{
//             res.status(400).send('Error creating student : ' + error);
//     });
// })

route.post('/createStudent',async function(req, res){
    try{
        var student = await data.createStudent(req.body);
        res.status(200).send('Student created : ' + student);
    }catch(error){
        res.status(400).send('Error creating student : ' + error);
    }
})

route.get('/findStudent/:rollNo',(req,res)=>{
    data.findStudentByRollNo(req.params.rollNo).exec((err, student)=>{
        if(err)
            res.status(400).send('Error finding student : ' + err);
        else
            res.status(200).send('Student found : ' + student);
    })
})

route.put('/updateStudent/:rollNo', (req, res)=>{
    data.updateStudentByRollNo(req.params.rollNo, req.body).exec((err, oldStudent)=>{
        if(err)
            res.status(400).send('Error updating student : ' + err);
        else
            res.status(200).send('Old student was : ' + oldStudent);
    })
})

route.delete('/deleteStudent/:rollNo', (req, res)=>{
    data.deleteStudentByRollNo(req.params.rollNo).exec((err, deletedStudent)=>{
        if(err)
            res.status(400).send('Error deleting student : ' + err);
        else
            res.status(200).send('Deleted student : ' + JSON.stringify(deletedStudent));
    });
});

module.exports = route;