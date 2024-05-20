const express = require('express')
const studentModel = require('../model/student.model')
const routers = express.Router()
routers.use(express.urlencoded({ extended: true }))
const { update, del } = require('../studentController/studentController')
//add
routers.post('/', async (req, res) => {
    const student = await studentModel.create
        (req.body)
    res.json(student)
})
//get
routers.get('/', async (req, res) => {
    try {
        const students = await studentModel.find({})
        res.status(200).json(students)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})
   /*routers.get("/:id", async (req, res) => {
    try {
        const id = req.params.id
        const student = await studentModel.findById(id)
        res.json(student)
        if (!student) res.json({ message: 'student not exist' })
    }
    catch (err) {
        res.json(500).json({ message: error.message })
    }
})*/
//put
routers.put('/:id', update)
//delete
routers.delete('/:id', del)
module.exports = routers