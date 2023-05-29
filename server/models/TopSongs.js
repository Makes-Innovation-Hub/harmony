import mongoose from "mongoose";

const TopSongsSchema = new mongoose.Schema(
    {
        date:{
            type: Date,
            default: Date.now,
        },
        language: {
          type: String,
          required: [true, "Please add language"],
          enum: ['hebrew', 'arabic']
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


export default mongoose.model("TopSongs", TopSongsSchema);