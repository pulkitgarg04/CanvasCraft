import mongoose from "mongoose";

export interface Image {
    _id?: mongoose.Types.ObjectId;
    title: string;
    description: string;
    imageURL: string;
    createdAt?: Date;
    updatedAt?: Date;
}

const imageSchema = new mongoose.Schema<Image>(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true
        },
        imageURL: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true
    }
);

const Image = mongoose.models?.Image || mongoose.model<Image>("Image", imageSchema);
export default Image;