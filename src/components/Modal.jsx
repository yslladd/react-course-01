import { useNavigate } from 'react-router-dom';
import classes from './Modal.module.css';

// eslint-disable-next-line react/prop-types
function Modal({ children }) {
    
    const navigate = useNavigate();

    function onCloseHandler() {
        navigate('..');
    }

    return (
        <>
            <div className={classes.backdrop} onClick={ onCloseHandler }></div>
            <dialog open className={classes.modal}>
                {children}
            </dialog>
        </>
    );
}

export default Modal;