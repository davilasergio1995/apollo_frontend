import { useState } from "react";
import './TitleBar.css';

const TitleBar = () => {
    const [title] = useState('Twinkeep');

    return(
        <div className='title-bar'>
            {title}
        </div> 
    )
}

export default TitleBar;