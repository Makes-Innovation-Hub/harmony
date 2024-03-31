import { useSelector } from "react-redux";
import { useGetSongByIdQuery } from "../api/addCoverToSongApi";
import { useGetCoverSongByIdQuery } from "../api/viewsAndLikesApi";
import { useEffect, useState } from "react";

function useCoverSong(id) {
  const currentUser = useSelector((state) => state.auth.user);

  const { data: coverSong, isSuccess: coverSongSuccess } =
    useGetCoverSongByIdQuery(id);
  const { refetch: refetchOriginalSong } = useGetSongByIdQuery(
    coverSong?.originalSongId,
    {
      skip: !coverSong?.originalSongId,
    }
  );

  const [likesCount, setLikesCount] = useState(coverSong?.likes.length || 0);
  const [userHasLiked, setUserHasLiked] = useState(
    coverSong?.likes.includes(currentUser.id)
  );

  useEffect(() => {
    if (coverSong?.originalSongId) {
      refetchOriginalSong();
    }
  }, [coverSong, refetchOriginalSong]);

  useEffect(() => {
    setLikesCount(coverSong?.likes.length || 0);
    setUserHasLiked(coverSong?.likes.includes(currentUser.id));
  }, [coverSong, currentUser.id]);

  return [
    currentUser,
    coverSong,
    coverSongSuccess,
    refetchOriginalSong,
    likesCount,
    setLikesCount,
    userHasLiked,
    setUserHasLiked,
  ];
}

export default useCoverSong;
