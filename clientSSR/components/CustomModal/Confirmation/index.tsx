import { useState } from "react";
import { Modal, Image } from 'react-bootstrap';
import Custom_button from '../../Custom_button'

interface Imodal {
    handleSave: ()=>void;
    action: object
    logo: string
}
const CustomModal:React.FC<Imodal> = ({handleSave, action, logo}) => {
    const [display, setDisplay] = useState(false);
    const close = () => setDisplay(false);
    const Display = () => setDisplay(true);
  
    return (
      <>
        <Image alt={logo} src={logo} style={{width:"3vw", marginTop:"1.5vh", cursor: "pointer"}} onClick={Display} />
        <Modal show={display} onHide={close}>
          <Modal.Header closeButton>
            <Modal.Title>Confirmation</Modal.Title>
          </Modal.Header>
            <Modal.Body>Are you sure you want to {action} ?</Modal.Body>
          <Modal.Footer>
            <Custom_button onClick={close}>
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