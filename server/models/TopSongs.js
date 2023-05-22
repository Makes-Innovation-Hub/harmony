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
        //Before creating the playlist first look for all the songs in Mongo. If a song doesn't exist, create it. When creating a playlist, use populate to refer to the songs by id
        topSongs:[ 
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Song',
            }
        ],
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