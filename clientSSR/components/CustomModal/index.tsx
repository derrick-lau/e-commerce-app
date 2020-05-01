import { useState } from "react";
import { Modal, Image } from 'react-bootstrap';
import Custom_button from '../Custom_button'

interface Imodal {
    handleSave: ()=>void;
    action: object
    logo: string
}
const CustomModal:React.FC<Imodal> = ({handleSave, action, logo}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Image alt={logo} src={logo} style={{width:"3vw", marginTop:"1.5vh", cursor: "pointer"}} onClick={handleShow} />
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Confirmation</Modal.Title>
          </Modal.Header>
            <Modal.Body>Are you sure ?</Modal.Body>
          <Modal.Footer>
            <Custom_button onClick={handleClose}>
              Close
            </Custom_button>
            <Custom_button  onClick={handleSave}>
              {action}
            </Custom_button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
export default CustomModal