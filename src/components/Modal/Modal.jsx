import s from './Modal.module.css';

const Modal = ({ src, onClickClose }) => {
  return (
    <div className={s.Overlay} onClick={even => onClickClose(even)}>
      <div className={s.Modal}>
        <img src={src} alt="open full hd img" />
      </div>
    </div>
  );
};

export default Modal;
