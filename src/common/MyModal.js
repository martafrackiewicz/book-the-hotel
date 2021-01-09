import React from 'react';
import { Modal, ModalHeader, ModalFooter } from 'reactstrap';
import {useHistory} from "react-router-dom";

const MyModal = ({url, textHeader, textButton, isOpen, toggle}) => {

    const history = useHistory();
    const handleReturn = () => history.push(url)
    const handleClose = () => window.location.reload();

    return <Modal centered={true} fade={false} backdrop={'static'} keyboard={false} isOpen={isOpen} toggle={toggle}>
        <ModalHeader>{textHeader}</ModalHeader>
        <ModalFooter>
            <button onClick={url !== null ? handleReturn : handleClose} className="btn btn-primary">{textButton}</button>
        </ModalFooter>
    </Modal>
}

export default MyModal;