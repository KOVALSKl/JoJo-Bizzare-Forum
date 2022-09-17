import account from '../../assets/menu-dvd-disc.svg'
import join from '../../assets/join-us.svg'
import './UserBlock.css'

import { useSelector } from 'react-redux'
import Button from '../button/Button'
import { Link } from 'react-router-dom'

function UserBlock({ classNames }) {

    const user = useSelector((state) => state.user.value)

    return (
        <div className={['user-block', ...classNames].join(' ')}>
            {(user === null)
                ? <div className='not-authorized-user'>
                    <img src={join} alt="" />
                    <span className='join-us-span'>join us,<br />&nbsp;honey</span>
                    <Link className='join-section-button' to={'/registration'}>SIGN UP</Link>
                    <Link className='join-section-button' to={'/login'}>LOG IN</Link>
                </div>
                : <div className='authorized-user'>
                    <img src={account} alt="Account image" id='userlogo' />
                    <span id='userlogin'>{
                        (user.nickname.split(' ').map((item, index) => {
                            return (<div key={index}>{item}</div>)
                        }))
                    }</span>
                </div>
            }
        </div>
    );
}

export default UserBlock;