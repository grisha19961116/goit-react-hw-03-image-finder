import EscapeOutside from 'react-escape-outside';

import s from './Modal.module.css';

const Modal = ({ src, closeModalClick, closeModalEsc }) => {
  return (
    <EscapeOutside onEscapeOutside={e => closeModalEsc(e)}>
      <div className={s.Overlay} onClick={e => closeModalClick(e)}>
        <div className={s.Modal}>
          <img src={src} alt="open full hd img" />
        </div>
      </div>
    </EscapeOutside>
  );
};

export default Modal;
