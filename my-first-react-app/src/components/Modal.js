export const Modal = ({ children, showModal, closeModal }) => {


    return showModal
        ? (
            <div>
                <h2>Modal</h2>
                { children }
                <button
                    onClick={closeModal}
                >Close</button>
            </div>
        )
        : null;
} 