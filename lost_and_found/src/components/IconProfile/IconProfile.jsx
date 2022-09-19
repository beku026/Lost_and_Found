import React, { useState } from 'react';
import s from './IconProfile.module.scss';
import Icon from '../../assets/user_icon-icons.com_66546.png'

const IconProfile = () => {
    const [imageLogo, setImageLogo] = useState('')
    return (
        <>
            <div className={s.icon_profile}>
                <img src={imageLogo === '' ? Icon : imageLogo} alt="icon-profile" />
            </div>
            <h6 className={s.text}>Profile Photo</h6>
        </>
    );
};

export default IconProfile;