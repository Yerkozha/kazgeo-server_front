import React from 'react';
import preloader from "../../../assets/preloader.svg";

type PropsType = {
}

let Preloader: React.FC = () => {
    return <div  style={ { backgroundColor: 'white' } }>
        <img src={preloader} />
    </div>
}

export default Preloader;
