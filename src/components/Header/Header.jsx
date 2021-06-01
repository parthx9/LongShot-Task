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
                    <div className='menu'>
                        <ul>
                            <li>
                                Blogs
                            </li>
                            <li>
                                Headline
                            </li>
                            <li>
                                Blogs
                            </li>
                            <li>
                                Headline
                            </li>
                            <li>
                                Blogs
                            </li>
                            <li>
                                Headline
                            </li>
                        </ul>
                    </div>
                </div>
            </Drawer>
        </div>
    )
}

export default Header