import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


// export default function Alert({msg}) {
//   return (
//     <>       
//         <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
//         Launch demo modal
//         </button>

//         <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//             <div class="modal-dialog">
//                     <div class="modal-content rounded-3 shadow">
//                         <div class="modal-body p-4 text-center">
//                             <h5 class="mb-0">អបអរសាទរ</h5>
//                             <p class="mb-0">{msg}</p>
//                         </div>
//                         <div class="modal-footer flex-nowrap p-0">
//                             <button type="button" class="btn btn-lg btn-link fs-6 text-decoration-none col-6 m-0 rounded-0 border-end"><strong>Yes, 👩🏻‍💻</strong></button>
//                             <button type="button" class="btn btn-lg btn-link fs-6 text-decoration-none col-6 m-0 rounded-0" data-bs-dismiss="modal">Yes, 🏆</button>
//                         </div>
//                     </div>
//             </div>
//         </div>
//     </>

//   )
// }


export default function Alert({msg, mode}){

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    setShow(mode)
    console.log('show', show);
  }, [])

  return (
    <>

      <Modal show={show} onHide={handleClose} className="modal-dialog">
        <Modal.Header closeButton>
          <Modal.Title>អបអរសាទរ</Modal.Title>
        </Modal.Header>
        <div class="modal-content rounded-3 shadow">
            <Modal.Body className='modal-body p-4 text-center'>
                {msg}
            </Modal.Body>
        </div>
        
        <Modal.Footer>
            <div class="modal-footer flex-nowrap p-0">
                <button type="button" class="btn btn-lg btn-link fs-6 text-decoration-none col-6 m-0 rounded-0 border-end"><strong>Yes, 👩🏻‍💻</strong></button>
                <button type="button" class="btn btn-lg btn-link fs-6 text-decoration-none col-6 m-0 rounded-0" data-bs-dismiss="modal">Yes, 🏆</button>
            </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}


