import * as S from "./uploadCoverModal.styles";

import React, { useRef, useState } from "react";
import Modal from "./UploadCoverButton";
import { useCreateCoverMutation } from "../../api/addCoverToSongApi";

const UploadCoverModal = ({
  originalLang,
  originalArtist,
  originalSongCover,
  originalSongName,
  originalSongId,
}) => {
  const [createCover] = useCreateCoverMutation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [coverData, setCoverData] = useState({
    artistName: "",
    youtubeUrl: "",
  });
  const [errorMsg, setErrorMsg] = useState("");

  const artistRef = useRef();
  const youtubeLinkRef = useRef();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
    closeModal();
    setCoverData({ artistName: "", youtubeUrl: "" });
  }

  return (
    <main>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        onRequestOpen={openModal}
      >
        <form>
          <S.FormLabel>Artist Name:</S.FormLabel>
          <S.FormInput
            type="text"
            name="artistName"
            value={coverData.artistName}
            onChange={handleInputChange}
            ref={artistRef}
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
          <div style={{ width: "100%", display: "flex" }}>
            <S.FormButton
              type="button"
              onClick={() => validateYouTubeUrl(coverData.youtubeUrl)}
            >
              Create
            </S.FormButton>
          </div>
          <S.XButton onClick={closeModal}>X</S.XButton>
        </form>
      </Modal>
    </main>
  );
};

export default UploadCoverModal;
