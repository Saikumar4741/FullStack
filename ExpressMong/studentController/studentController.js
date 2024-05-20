const studentModel=require('../model/student.model')
async function update(req,res){
    const {id}=req.params
    const student=await studentModel.findByIdAndUpdate(id,req.body)
    if(!student) res.json({message:'student not exist'})
    else
    {
        const updatedStudent=await studentModel.findById(id)
        res.status(200).json(updatedStudent);
    }
}
async function del(req,res)
{
    const {id}=req.params
    const student=await studentModel.findByIdAndDelete(id)
    if(!student) res.json({message:'student not exist'})
    else
    {
        //const deleteStudent=await studentModel.findById(id)
        res.status(200).json(student)
    }
}
module.exports={update,del}