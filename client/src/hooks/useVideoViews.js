import { useState } from "react";
import { useAddViewMutation } from "../api/viewsAndLikesApi";

function useVideoViews(updatedCoverSong) {
  const [playVideoDiv, setPlayVideoDiv] = useState(false);

  const [addView] = useAddViewMutation();

  function updateViews() {
    addView(updatedCoverSong?._id);
    setPlayVideoDiv(true);
  }

  return [playVideoDiv, updateViews];
}

export default useVideoViews;
