import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        fullName: {
            typeof: String,
            required: true
        },
        imageUrl: {
            typeof: String,
            required: true
        },
        clerkId: {
            type: String, 
            required: true,
            unique: true
        },
    }, 
{ timestamps: true } // createdAt, updatedAt 
);


export const User = mongoose.model("User", userSchema);