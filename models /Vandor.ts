import mongoose, {Schema, Document, Model} from "mongoose";
import { StringLiteral } from "typescript";

interface VandorDoc extends Document {
    name: string;
    ownerName: string;
    foodType: [string];
    pincode: string;
    address: string;
    phone: string;
    email: string;
    password: string;
    salt: string;
    serviceAvailable: string;
    coverImages: [string];
    rating: number,
    foods: any,
}

const VandorSchema = new Schema({
    name: {type: String, required: true},
    ownerName: {type: String, required: true},
    foodType: {type: [String]},
    pincode: {type: String, required: true},
    address: {type: String, required: true},
    phone: {type: String, required: true},
    email: {type: String, required: true},  
    password: {type: String, required: true},
    salt: {type: String, required: true},
    serviceAvailable: {type: Boolean, required: true},
    coverImages: {type: [String], required: true},
    rating: {type: Number, required: true},
    foods: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'food'
    }]
},{
    timestamps: true
})

const Vandor = mongoose.model<VandorDoc>('vandor', VandorSchema)