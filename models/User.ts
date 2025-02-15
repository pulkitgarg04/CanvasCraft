import mongoose from "mongoose";
import bcrypt from "bcryptjs";

export interface User {
    name: string;
    username: string;
    email: string;
    password: string;
    _id?: mongoose.Types.ObjectId;
    createdAt?: Date;
    updatedAt?: Date;
}

const userSchema = new mongoose.Schema<User>(
    {
        name: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

userSchema.pre("save", async function (next) {
    if(this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 10)
    }

    next();
});

// Use the User model if it already exists in the database or refer to the new model
const User = mongoose.models?.User || mongoose.model<User>("User", userSchema);
export default User;