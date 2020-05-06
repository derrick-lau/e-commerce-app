import { useState } from "react";
import { Modal, Image } from 'react-bootstrap';
import Custom_button from '../../Custom_button'
import styles from './index.module.css'
import { ReviewApi } from "../../../api";

interface Iwrite {
  productId:number;
}


const WriteReviewModal:React.FC<Iwrite> = ({productId}) => {
    const [display, setDisplay] = useState(false);
    const [description, setDescription] = useState<string>("")
    const [rate, setRate] = useState<number>(5)
    const close = () => setDisplay(false);
    const Display = () => setDisplay(true);

    const handleSave = async(event:React.ChangeEvent<HTMLFormElement>) => {
      event.preventDefault();
      try {
        console.log(rate, description, productId)
        await ReviewApi().post(description, rate, productId)
        window.location.pathname = '/order'
      } catch(e) {
        alert(e.response? e.response.data.message: e)
      }
    }

    return (
      <>
        <Image alt={"/writeReview.png"} src={"/writeReview.png"} style={{width:"9.5vw", marginTop:"1.5vh", cursor: "pointer"}} onClick={Display} />
        <Modal show={display} onHide={close}>
          <Modal.Header closeButton>
            <Modal.Title>Write a review</Modal.Title>
          </Modal.Header>
          <form className={styles.form} onSubmit={handleSave}>
            <label className={styles.label}>Rate: </label>
            <select onChange={(event:React.ChangeEvent<HTMLSelectElement>)=> setRate(parseInt(event.target.value))} className={styles.select} required>
              <option value="5">5</option>
              <option value="4">4</option>
              <option value="3">3</option>
              <option value="2">2</option>
              <option value="1">1</option>
            </select>
            <textarea
              onChange={(event:React.ChangeEvent<HTMLTextAreaElement>)=> setDescription(event.target.value)}
              placeholder='comment' 
              required
            />
            <Modal.Footer>
              <Custom_button onClick={close}>Close</Custom_button>
              <Custom_button  type="submit" >Save</Custom_button>
            </Modal.Footer>
          </form>
        </Modal>
      </>
    );
  }
  
export default WriteReviewModal