import mongoose from "mongoose";

const SongSchema = new mongoose.Schema(
    {
        name:
        {
            hebrew: {
                type: String,
                required: [true, "please add song name in Hebrew"],
                trim: true,
                maxlength: [100, "Name can not be more than 100 characters"]
            },
            arabic: {
                type: String,
                required: [true, "please add song name in Arabic"],
                trim: true,
                maxlength: [100, "Name can not be more than 100 characters"]
            },
            english: {
                type: String,
                required: [true, "please add song name in English"],
                trim: true,
                maxlength: [100, "Name can not be more than 100 characters"]
            },
        },
        originalLang: {
            type: String,

        },
        lyrics:
        {
            hebrew: {
                type: String,
                trim: true,
            },
            arabic: {
                type: String,
                trim: true,
            },
            english: {
                type: String,
                trim: true,
            },
        },
        artist:[ 
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Artist',
            }
        ],
        imgURL: {
            type: String,
        },
        album: {
            type: String,
        },
        youtubeURL: {
            type: String,
        }
    },
    {
        toJSON: {
          transform(_, ret) {
            delete ret.__v;
          },
        },
        toObject: {
          transform(_, ret) {
            delete ret.__v;
          },
        },
      }

)

export default mongoose.model("Song", SongSchema);