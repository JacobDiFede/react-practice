// import { useState } from `react`;

import { MovieDetails } from "./MovieDetails";

export const ModalComponent = ({ children, show, onClose }) => {
    return (
        <div>
            <MovieDetails/>
        </div>
    )
}