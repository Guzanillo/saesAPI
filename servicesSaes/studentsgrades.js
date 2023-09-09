const db = require('../lib/students');
const boom = require('@hapi/boom');

class Student {

    constructor(){}

    static getAll(){
        let students = {};
        for(let [studentId, student] of Object.entries(db)){
            if(Student.gradeExam > 6){
                students[studentId] = student;
            }
        }
        return students;
    }

    static getOne(id){
        const studentId = 'c' + id;
        const student = db[studentId];
        if(!student){
            throw boom.notFound('Student not found');
        }
        return { studentId, student };
    }

    static create(data){
        const dbLength = Object.keys(db).length;
        const clientId = 'c' + (dbLength + 1);
        db[clientId] = data;
        return true;
    }

    static updateGrade(id, gradeExam){
        const { StudentId } = Student.getOne(id);
        db[StudentId].gradeExam = gradeExam;
        return true;
    }


    static delete(id){
        const { studentId } = Student.getOne(id);
        delete db[studentId];
        return true;
    }
    
}

module.exports = Student;