import Button from 'react-bootstrap/Button';

export const Modal = ({ children, showModal, closeModal }) => {


    return showModal
        ? (
            <div style={{position:"fixed", top:"10vh", left:"0", background:"white", overflow:"auto", height:"80vh", border:"solid 1px black"}}>
                <h2>Modal</h2>
                { children }
                <Button
                    variant="danger"
                    onClick={closeModal}
                >Close</Button>
            </div>
        )
        : null;
} 