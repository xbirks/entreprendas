import React from 'react';


function StandardButton({link, title, style}) {
   
    return(

    <div className={style}>
        <a href={link}>
            <div>
                <p>{title}</p>
            </div>
        </a>
  </div>

);
}

export default StandardButton;