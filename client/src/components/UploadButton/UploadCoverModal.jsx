import {
  FormLabel,
  FormInput,
  FormButton,
  XButton,
} from "./uploadCoverModal.styles";

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
          <FormLabel>Artist Name:</FormLabel>
          <FormInput
            type="text"
            name="artistName"
            value={coverData.artistName}
            onChange={handleInputChange}
            ref={artistRef}
          />
          <FormLabel>Youtube Link:</FormLabel>
          <FormInput
            type="text"
            name="youtubeUrl"
            value={coverData.youtubeUrl}
            onChange={handleInputChange}
            ref={youtubeLinkRef}
          />
          <div style={{ width: "100%", display: "flex" }}>
            <FormButton type="button" onClick={addNewCoverSong}>
              Create
            </FormButton>
          </div>
          <XButton onClick={closeModal}>X</XButton>
        </form>
      </Modal>
    </main>
  );
};

export default UploadCoverModal;
