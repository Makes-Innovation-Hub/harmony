import express from 'express';
import Song from '../models/Song.js'
import Artist from '../models/Artist.js';
const router = express.Router();

router.post('/', (req, res) => {
  const searchTerm = req.body.searchTerm;

  Promise.all([
    Song.find({
      $or: [
        { 'name.hebrew': { $regex: searchTerm, $options: 'i' } },
        { 'name.arabic': { $regex: searchTerm, $options: 'i' } },
        { 'name.english': { $regex: searchTerm, $options: 'i' } },
      ],
    }),
    Artist.find({
      $or: [
        { 'name.hebrew': { $regex: searchTerm, $options: 'i' } },
        { 'name.arabic': { $regex: searchTerm, $options: 'i' } },
        { 'name.english': { $regex: searchTerm, $options: 'i' } },
      ],
    }),
  ])
    .then(([songResults, artistResults]) => {
      const formattedResults = {
        songs: songResults.map((song) => ({
          id: song._id,
          name: song.name,
        })),
        artists: artistResults.map((artist) => ({
          id: artist._id,
          name: artist.name,
  
        })),
      };

      res.json(formattedResults);
    })
    .catch((error) => {
      console.error('Search error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});

export default router;
