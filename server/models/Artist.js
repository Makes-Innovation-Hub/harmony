import mongoose from "mongoose";

const ArtistSchema = new mongoose.Schema(
    {
        name:
        {
            hebrew: {
                type: String,
                required: [true, "please add artist name in Hebrew"],
                trim: true,
                maxlength: [100, "Name can not be more than 100 characters"]
            },
            arabic: {
                type: String,
                required: [true, "please add artist name in Arabic"],
                trim: true,
                maxlength: [100, "Name can not be more than 100 characters"]
            },
            english: {
                type: String,
                required: [true, "please add artist name in English"],
                trim: true,
                maxlength: [100, "Name can not be more than 100 characters"]
            },
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
        albums: [
            {
                type: String
            }
        ] 
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

ArtistSchema.pre("save", async function(next) {
    if (this.albums && this.albums.length > 0) {
        this.albums = this.albums.map(album => album.toLowerCase());
      }
      next();
});

export default mongoose.model("Artist", ArtistSchema);