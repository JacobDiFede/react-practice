import { useState } from 'react';

export const StateExampleComponent = () => {
    const [isError, setIsError] = useState(true);

    return (
        <div>
            {
            isError &&
            <img style={{width:"200px", height:"200px"}} src="https://i.pinimg.com/originals/13/9a/19/139a190b930b8efdecfdd5445cae7754.png"></img>
            }
            {
            !isError &&
            <img style={{width:"200px", height:"200px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTv0mTTTkNUz7PQ8bIIE_mibnOgL7u0y495g&usqp=CAU"></img>       
            }
            <button
                onClick={() => setIsError(!isError)}
            >Solve</button>
        </div>
    )
}