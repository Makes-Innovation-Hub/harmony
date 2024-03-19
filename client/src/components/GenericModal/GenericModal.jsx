import React from "react";
import * as S from "./GenericModalStyles";

export default function GenericModal({ children, isOpen, onRequestClose }) {
  return (
    <>
      <S.FormContainer>
        <S.ModalPositionContainer>
          {isOpen && (
            <S.ModalBackground onClick={() => onRequestClose()}>
              <S.ModalBody onClick={(e) => e.stopPropagation()}>
                {children}
                <S.XButton onClick={onRequestClose}>X</S.XButton>
              </S.ModalBody>
            </S.ModalBackground>
          )}
        </S.ModalPositionContainer>
      </S.FormContainer>
    </>
  );
}
