import { useState } from "react";
import { Modal, Image } from 'react-bootstrap';
import Custom_button from '../../Custom_button'

interface Imodal {
    handleSave: ()=>void;
    title: object
    logo: string
}

const ModalForm:React.FC<Imodal> = ({handleSave, title, logo}) => {
    const [display, setDisplay] = useState(false);
    const close = () => setDisplay(false);
    const Display = () => setDisplay(true);
  
    return (
      <>
        <Image alt={logo} src={logo} style={{width:"3vw", marginTop:"1.5vh", cursor: "pointer"}} onClick={Display} />
        <Modal show={display} onHide={close}>
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <form>
            <Modal.Body>
            </Modal.Body>
            <Modal.Footer>
              <Custom_button onClick={close}>Close</Custom_button>
              <Custom_button  onClick={handleSave}>Save</Custom_button>
          </Modal.Footer>
          </form>
        </Modal>
      </>
    );
  }
  
export default ModalForm