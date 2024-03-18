import * as S from "./uploadCoverButton.styles";

const UploadCoverButton = ({
  children,
  isOpen,
  onRequestClose,
  onRequestOpen,
  btnText,
}) => {
  return (
    <>
      <S.FormContainer>
        <S.ModalPositionContainer>
          <S.ButtonCover onClick={() => onRequestOpen()}>
            {/* Upload Cover */}
            {btnText}
          </S.ButtonCover>
          {isOpen && (
            <S.ModalBackground onClick={() => onRequestClose()}>
              <S.ModalBody onClick={(e) => e.stopPropagation()}>
                {children}
              </S.ModalBody>
            </S.ModalBackground>
          )}
        </S.ModalPositionContainer>
      </S.FormContainer>
    </>
  );
};

export default UploadCoverButton;
