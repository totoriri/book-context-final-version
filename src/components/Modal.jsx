import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { createPortal } from 'react-dom'

import styled from "styled-components"

const ModalWithTransitions = ({ children,activator }) => {
  const [show, setShow] = useState(false)

  const content = (
    <Overlay>
      <Modal>
        <ModalBody>
          {children}
          <CloseButton
          type="button"
          onClick={() => setShow(false)}
        >
          X
        </CloseButton>
        </ModalBody>
      </Modal>
    </Overlay>
  )

  return (
    <>
      {activator({ setShow })}
      {createPortal(
        <CSSTransition
          in={show}
          timeout={120}
          unmountOnExit
        >
          {() => <div>{content}</div>}
          </CSSTransition>,
          document.body
      )}
    </>
  )
}

export default ModalWithTransitions

const Overlay = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 98;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.74);
`;

const Modal = styled.div`
    position: relative;
    z-index: 99;
    width: 100%;
    max-width: 20rem;
    max-height: 100%;
    margin: 0 auto;
`;

const ModalBody = styled.div`
    width:300px;
    padding: 1.25rem 1.5rem;
    border-radius: 4px;
    background-color: white;
    width:530px;
    text-align:center;
    transform:translateX(-125px);
    @media (max-width: 768px){
        width:80%;
        transform:translate(10px);
      }
`;

const CloseButton = styled.button`
    position: absolute;
    top:5px;
    right:4px;
    font-size:20px;
    border: 0;
    -webkit-appearance: none;
    background: none;
    color: black;
    cursor: pointer;
`;