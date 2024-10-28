import mongoose, {Schema} from "mongoose";

const ContactModel = mongoose.Schema({
    email: String,
    query: String
})
const contactModel = mongoose.model("contacts", ContactModel)
export default contactModel