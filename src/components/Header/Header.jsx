import Drawer from '@material-ui/core/Drawer';
import { useState } from 'react';
import logo from '../../assets/img/logo.png'

const Header = () => {

    const [open, setOpen] = useState(true)

    return(
        <div className='header'>
            <div className='menu-btn'>
                <i onClick={() => setOpen(true)} className='fa fa-bars'></i>
            </div>
            <div className='logo'>
                <img src={logo} alt='LongShort' width='200px' />
            </div>
            <Drawer anchor='left' open={open} onClose={() => setOpen(false)}>
                <div className='left-panel'>
                    <div className='logo'>
                        <img src={logo} alt='LongShort'/>
                    </div>
                    <div className='project'>
                        <select>
                            <option>Project LongShot</option>
                        </select>
                    </div>
                    <div className='menu'>
                        <ul>
                            <li className='active'>
                                Blogs
                            </li>
                            <li>
                                Headline
                            </li>
                            <li>
                                Rephraser 
                            </li>
                            <li>
                                Extender
                            </li>
                            <li>
                                Bullet Points
                            </li>
                        </ul>
                    </div>
                </div>
            </Drawer>
        </div>
    )
}

export default Header