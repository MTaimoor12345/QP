import mongoose from 'mongoose'

const connectdb = async (DATABASE_URL)=>{
    try{
        const DB_OPTIONS = {dbName : 'QP',};
        await mongoose.connect("mongodb+srv://TazaMeat:taimoor12345@cluster0.sg6t8jo.mongodb.net/?retryWrites=true&w=majority",DB_OPTIONS);
        console.log("connect succecful");
    }catch(err){
         console.log(err);
    }
}

export default connectdb;