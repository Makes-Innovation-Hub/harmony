import { ButtonCover } from "./uploadCoverModal.styles";
import {
  FormContainer,
  ModalBackground,
  ModalBody,
  ModalPositionContainer,
} from "./UploadCoverButton.styles";

const UploadCoverButton = ({
  children,
  isOpen,
  onRequestClose,
  onRequestOpen,
}) => {
  return (
    <>
      <FormContainer>
        <ModalPositionContainer>
          <ButtonCover onClick={() => onRequestOpen()}>
            Upload Cover
          </ButtonCover>
          {isOpen && (
            <ModalBackground onClick={() => onRequestClose()}>
              <ModalBody onClick={(e) => e.stopPropagation()}>
                {children}
              </ModalBody>
            </ModalBackground>
          )}
        </ModalPositionContainer>
      </FormContainer>
    </>
  );
};

export default UploadCoverButton;
