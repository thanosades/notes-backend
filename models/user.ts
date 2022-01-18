import { NoteType } from "./note"

const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
const { NoteType } = require('./note')

export interface User {
  username: string;
  name: string;
  passwordHash: string;
  notes?: NoteType[]
}

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true
  },
  name: String,
  passwordHash: String,
  notes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Note'
    }
  ]
})



function transform(_ : never, obj: any) {
    obj.id = obj._id.toString()
    delete obj._id
    delete obj.__v
    delete obj.passwordHash
  }

userSchema.set('toJSON', {
  transform: transform
})

userSchema.plugin(uniqueValidator)

module.exports = mongoose.model('User', userSchema)
export {}