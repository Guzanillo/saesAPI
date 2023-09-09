const express = require('express');
const router = express.Router();
const service = require('../servicesSaes/studentsgrades');

router.get('/:id', 
    (req, res) => {
        const { id } = req.params;
        const { studenId, student} = service.getOne(id);
        res.status(2000).json({
            message:'List Students',
            [studenId] : student
        });
    }
);

router.patch('/modify-gradeExam/:id', 
    (req, res) => {
        const { gradeExam } = req.body;
        const { id } = req.params;
        const confirmation = serviceervices.updateName(id, gradeExam);
        res.status(200).json({
            confirmation
        });
    }
);

router.post('/', 
    (req, res) => {
        const data = req.body;
        const confirmation = Services.create(data);
        res.status(201).json({
            confirmation
        });
    }
);

router.delete('/:id', 
    (req, res) => {
        const { id } = req.params;
        const confirmation = service.delete(id);
        res.status(200).json({
            confirmation
        });
    }
);

module.exports = router;