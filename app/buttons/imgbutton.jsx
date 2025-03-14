import React from 'react';
import Image from 'next/image';


function ImgButton({link, title, style, icon}) {
   
    return(

    <div className="imgButton">
        <a href={link}>
            <div className={style}>
                <p className="imgButton__title">{title}</p>
                <div className="imgButton__icon">
                    <Image src={icon} alt={title}></Image>
                </div>
            </div>
        </a>
    </div>

);
}

export default ImgButton;