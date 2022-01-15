import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const UserSchema= new Schema({ 
  username: {
    type: String,
    required: true,
  }
});

const User = mongoose.model('User', UserSchema);

export default User