import mongoose from "mongoose";

export interface Video {
    _id?: mongoose.Types.ObjectId;
    title: string;
    description: string;
    imageURL: string;
    createdAt?: Date;
    updatedAt?: Date;
}

const videoSchema = new mongoose.Schema<Video>(
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

const Video = mongoose.models?.Video || mongoose.model<Video>("Video", videoSchema);
export default Video;