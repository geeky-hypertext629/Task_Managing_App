import mongoose from "mongoose";


const TodoSchema = new mongoose.Schema({
    data: {
      title: {
        type: String,
    },
    text:  {
            type: String,
        },
      },
    done: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

const todo = mongoose.model('todo', TodoSchema);

export default todo;