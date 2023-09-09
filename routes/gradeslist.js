const express = require('express');
const router = express.Router();
const list = require('../lib/gradesStudents');

router.get('/',
    (res,req) => {
    const listStudent = list.getAll(); 
    res.status(200).json({
        message: 'Grades of students', 
        listStudent
    });
}
);


router.post('/',
    (res,req)=>{
        const cal = req.post;
        const confirmation = service.create(cal);
        res.status(201).json({
            confirmation
        });
    }
);

module.exports = router;