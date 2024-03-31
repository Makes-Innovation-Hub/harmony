import { useEffect } from "react";
import { useToggleLikeMutation } from "../api/viewsAndLikesApi";
import { useGetTopCoversQuery } from "../api/topCoversApi";

function useVideoLikes(updatedCoverSong, id) {
  const [toggleLike, { isSuccess: toggleLikeIsSuccess }] =
    useToggleLikeMutation();
  const { refetch: refetchTopCovers } = useGetTopCoversQuery(
    updatedCoverSong?.originalLanguage
  );

  useEffect(() => {
    if (toggleLikeIsSuccess) {
      refetchTopCovers();
    }
  }, [toggleLikeIsSuccess]);

  async function toggleLikeOnServer() {
    try {
      await toggleLike(id);
    } catch (error) {
      console.error("Failed to synchronize like state with server:", error);
    }
  }

  return [toggleLikeOnServer];
}

export default useVideoLikes;
