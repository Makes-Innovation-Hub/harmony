import { useEffect, useRef, useState } from "react";
import { useAddCommentMutation } from "../api/viewsAndLikesApi";

function useVideoComment(updatedCoverSong) {
  const [isCommenting, setIsCommenting] = useState(false);
  const commentRef = useRef();
  const [addComment] = useAddCommentMutation();

  useEffect(() => {
    if (isCommenting) {
      commentRef.current.focus();
    }
  }, [isCommenting]);

  const handleShowComment = () => {
    setIsCommenting((prev) => !prev);
  };

  function handleAddComment() {
    if (commentRef?.current.value.trim().length) {
      addComment({
        id: updatedCoverSong?._id,
        content: commentRef.current.value,
      });
      commentRef.current.value = "";
    }
  }

  return [isCommenting, commentRef, handleShowComment, handleAddComment];
}

export default useVideoComment;
