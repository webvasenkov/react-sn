import React from 'react'
import github from '../../../assets/img/github.svg'
import vk from '../../../assets/img/vk.svg'
import facebook from '../../../assets/img/facebook.svg'
import instagram from '../../../assets/img/instagram.svg'
import twitter from '../../../assets/img/twitter.svg'
import website from '../../../assets/img/website.svg'
import youtube from '../../../assets/img/youtube.svg'
import mainLink from '../../../assets/img/mainLink.svg'
import {getImg, setImg} from "../../../utils/helper";
import style from './ProfileInfoExtra.module.css'

const ProfileLinks = ({contactValue, contactTitle}) => {
    const Images = setImg([github, vk, facebook, instagram, twitter, website, youtube, mainLink],
        ['github', 'vk', 'facebook', 'instagram', 'twitter', 'website', 'youtube', 'mainLink'])

    return (
        <>
            {contactValue !== null &&
            <li className={style.infoContactsItem}>
                <a className={style.link} href={contactValue} target='_blank' rel="noreferrer"><img className={style.linkImg}
                                                                                   src={getImg(Images, contactTitle)}
                                                                                   alt={contactTitle}/></a>
            </li>
            }
        </>
    )
}

export default ProfileLinks