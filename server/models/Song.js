import mongoose from "mongoose";

const SongSchema = new mongoose.Schema(
    {
        nameHebrew: {
            type: String,
            required: [true, "please add artist name in Hebrew"],
            trim: true,
            maxlength: [50, "Name can not be more than 50 characters"]
        },
        nameArabic: {
            type: String,
            required: [true, "please add artist name in Arabic"],
            trim: true,
            maxlength: [50, "Name can not be more than 50 characters"]
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

export default mongoose.model("Artist", SongSchema);