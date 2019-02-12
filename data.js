var Student=require('./students.js');
var Dao={};
Dao.createStudent = function(student){
    return Student.create({
        name: student.name,
        rollNo: student.rollNo
    });
}

Dao.findStudentByRollNo = function(rollNo){
    return Student.findOne({rollNo : rollNo});
}

Dao.updateStudentByRollNo = function(rollNo, student){
    return Student.findOneAndUpdate({rollNo : rollNo},
                          {name : student.name,
                           rollNo : student.rollNo},
                          {upsert : true});
}

Dao.deleteStudentByRollNo = function(rollNo){
    return Student.deleteOne({rollNo : rollNo});
}

module.exports = Dao;