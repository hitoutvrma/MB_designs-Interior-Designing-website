import mongoose from 'mongoose';
const FormDataSchema = new mongoose.Schema({
    first_name:{
        type:String,
        required:true,
    },
    last_name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
});

export default mongoose.models.FormData || mongoose.model('FormData',FormDataSchema);