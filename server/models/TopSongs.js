import mongoose from "mongoose";

const TopSongsSchema = new mongoose.Schema(
    {
        date:{
            type: Date,
            default: Date.now,
        },
        songs:[ 
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