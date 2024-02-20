import {
  FormLabel,
  FormInput,
  FormButton,
  XButton,
} from "./uploadCoverModal.styles";

import React, { useState } from "react";
import Modal from "./UploadCoverButton";

const UploadCoverModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [coverData, setCoverData] = useState({
    artistName: "",
    youtubeUrl: "",
  });

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
          />
          <FormLabel>Youtube Link:</FormLabel>
          <FormInput
            type="text"
            name="youtubeUrl"
            value={coverData.youtubeUrl}
            onChange={handleInputChange}
          />
          <div style={{ width: "100%", display: "flex" }}>
            <FormButton type="button">Create</FormButton>
          </div>
          <XButton onClick={closeModal}>X</XButton>
        </form>
      </Modal>
    </main>
  );
};

export default UploadCoverModal;
