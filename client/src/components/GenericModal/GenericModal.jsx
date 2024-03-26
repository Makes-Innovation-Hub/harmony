import React from "react";
import * as S from "./GenericModalStyles";

export default function GenericModal({
  children,
  isOpen,
  onRequestClose,
  ModalBodyStyles = S.ModalBody,
}) {
  return (
    <>
      <S.FormContainer>
        <S.ModalPositionContainer>
          {isOpen && (
            <S.ModalBackground onClick={() => onRequestClose()}>
              <ModalBodyStyles onClick={(e) => e.stopPropagation()}>
                {children}
                <S.XButton onClick={onRequestClose}>X</S.XButton>
              </ModalBodyStyles>
            </S.ModalBackground>
          )}
        </S.ModalPositionContainer>
      </S.FormContainer>
    </>
  );
}
