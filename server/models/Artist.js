import mongoose from "mongoose";

const ArtistSchema = new mongoose.Schema(
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
        nameEnglish: {
            type: String,
            required: [true, "please add artist name in English"],
            trim: true,
            maxlength: [50, "Name can not be more than 50 characters"]
        },
        songs:[ 
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Song',
            }
        ],
        // This field needs to be refractured:
        imgURL: {
            type: String,
        },
        albums: {
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

export default mongoose.model("Artist", ArtistSchema);