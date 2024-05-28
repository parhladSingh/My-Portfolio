import React from 'react';
import styles from './Modal.module.css';

const Modal = ({ show, handleClose, children }) => {
    return (
        <div className={`${styles.modal} ${show ? styles.show : ''}`}>
            <div className={styles.modalContent}>
                <span className={styles.close} onClick={handleClose}>&times;</span>
                {children}
            </div>
        </div>
    );
};

export default Modal;
