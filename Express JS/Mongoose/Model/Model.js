import mongoose from "mongoose"
import Schema from "../studentSchema/studentSchema.js"
 const studentModel= mongoose.model('classes',Schema)

 export default studentModel;

