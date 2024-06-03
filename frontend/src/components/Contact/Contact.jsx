import React, { useState } from 'react';
import styles from './Contact.module.css';
import axios from 'axios';
import Modal from './Modal';

const Contact = () => {
    const [value, setValue] = useState({
        firstname: '',
        lastname: '',
        emailaddress: '',
        phone: '',
        yourmessage: ''
    });

    const [showModal, setShowModal] = useState(false);

    const handleChange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const contact = await axios.post(`${window.location.origin}/contact`, value);
            console.log(contact.data);
            setShowModal(true); 
            setValue({
                firstname: '',
                lastname: '',
                emailaddress: '',
                phone: '',
                yourmessage: ''
            });
        } catch (error) {
            console.error("There was an error saving the contact data!", error);
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className={styles.contactContainer} id='contact'>
            <h1 className={styles.contactTitle}>Contact-Me</h1>
            <form onSubmit={handleSubmit} className={styles.contactForm}>
                <div className={styles.row}>
                    <div className={styles.formGroup}>
                        <label htmlFor="firstName">First Name</label>
                        <input onChange={handleChange} value={value.firstname} type="text" id="firstName" name="firstname" required/>
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="lastName">Last Name</label>
                        <input onChange={handleChange} value={value.lastname} type="text" id="lastName" name="lastname" required />
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email Address</label>
                        <input onChange={handleChange} value={value.emailaddress} type="email" id="email" name="emailaddress" required/>
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="phone">Phone Number</label>
                        <input onChange={handleChange} value={value.phone} type="tel" id="phone" name="phone" required/>
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                        <label htmlFor="message">Your Message</label>
                        <textarea onChange={handleChange} value={value.yourmessage} id="message" name="yourmessage" rows="5" required></textarea>
                    </div>
                </div>
                <div className={styles.row}>
                    <button type="submit" className={styles.submitBtn}>Submit</button>
                </div>
            </form>
            <Modal show={showModal} handleClose={handleCloseModal}>
                <h2 className={styles.modalh2}>Submitted Successfully</h2>
                <hr className={styles.divider} />
                <p className={styles.modalpara}>Your data is submitted successfully. I will contact you soon.</p>
            </Modal>
        </div>
    );
}

export default Contact;
