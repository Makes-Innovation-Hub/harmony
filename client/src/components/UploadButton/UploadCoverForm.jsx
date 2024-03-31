import * as S from "./UploadCoverForm.styles";

import React, { useEffect, useRef, useState } from "react";
import { useCreateCoverMutation } from "../../api/addCoverToSongApi";
import { useGetTopCoversQuery } from "../../api/topCoversApi";

const UploadCoverForm = ({
  originalLang,
  originalArtist,
  originalSongCover,
  originalSongName,
  originalSongId,
  closeModal,
}) => {
  const [
    createCover,
    {
      error: createCoverErrorMsg,
      isError: createCoverIsError,
      isSuccess: createCoverIsSuccess,
    },
  ] = useCreateCoverMutation();
  const { refetch: refetchTopCovers } = useGetTopCoversQuery(originalLang);
  const [coverData, setCoverData] = useState({
    artistName: "",
    youtubeUrl: "",
  });
  const [errorMsg, setErrorMsg] = useState("");

  const artistRef = useRef();
  const youtubeLinkRef = useRef();

  useEffect(() => {
    if (createCoverIsSuccess) {
      closeModal();
      refetchTopCovers();
    }
  }, [createCoverIsSuccess]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCoverData({
      ...coverData,
      [name]: value,
    });
  };

  const validateYouTubeUrl = (url) => {
    if (url !== undefined && url !== "") {
      const regExp =
        /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
      const match = url.match(regExp);
      if (match && match[2].length === 11) {
        addNewCoverSong();
        setErrorMsg("");
      } else {
        setErrorMsg("Invalid URL, please enter a valid YouTube link");
      }
    }
  };

  function addNewCoverSong() {
    createCover({
      youtubeUrl: youtubeLinkRef.current.value,
      coverArtistName: artistRef.current.value,
      originalLanguage: originalLang,
      originalArtist: originalArtist,
      originalSongCover: originalSongCover,
      originalSongName: originalSongName,
      originalSongId: originalSongId,
    });

    setCoverData({ artistName: "", youtubeUrl: "" });
  }

  return (
    <main>
      <form>
        <S.FormLabel>Artist Name:</S.FormLabel>
        <S.FormInput
          type="text"
          name="artistName"
          value={coverData.artistName}
          onChange={handleInputChange}
          ref={artistRef}
          maxLength={25}
        />
        <S.FormLabel>Youtube Link:</S.FormLabel>
        <S.FormInput
          type="text"
          name="youtubeUrl"
          value={coverData.youtubeUrl}
          onChange={handleInputChange}
          ref={youtubeLinkRef}
        />

        <S.ErrorMsg>{errorMsg}</S.ErrorMsg>
        {!errorMsg && (
          <>
            {createCoverIsError && (
              <S.ErrorMsg>{createCoverErrorMsg.data.error}</S.ErrorMsg>
            )}
          </>
        )}
        <S.CreateCoverButtonContainer>
          <S.FormButton
            type="button"
            onClick={() => validateYouTubeUrl(coverData.youtubeUrl)}
          >
            Create
          </S.FormButton>
        </S.CreateCoverButtonContainer>
      </form>
    </main>
  );
};

export default UploadCoverForm;
