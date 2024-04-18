'use client'
import { Button, Dropdown, Affix, Modal, Row } from 'antd';

import {
	UserOutlined,
    SettingOutlined,
    LogoutOutlined,
    SwapOutlined,
    CalendarOutlined,
    BarChartOutlined,
    OrderedListOutlined,
    TeamOutlined,
    HomeOutlined
} from '@ant-design/icons';
import Link from 'next/link'

const ModalMenu = ({showModal, setShowModal}) => {

    const styleButtons = {
        display: 'flex',
        gap: '5px',
        justifyContent:'center',
        alignItems:'center',
        padding:'30px',
        border: '2px #592321 solid',
        borderRadius: '10px'
    }

    const styleIcons = {
        color :'#592321',
        fontSize:'25px',
    }

    return (
        <div>
            <Modal
                open={showModal}
                onOk={()=> {}} 
                onCancel={()=>setShowModal(false)}
                closeIcon={false}
                footer={null}
                maskClosable={true}
                centered={true}
            >
                <div style={{display:'flex', gap:'20px', flexWrap:'wrap', justifyContent:'center'}}>
                    <Button onClick={()=> setShowModal(false)} style={styleButtons}>
                        <Link href='/'>
                            <HomeOutlined style={styleIcons}/>
                        </Link>
                    </Button>
                    <Button onClick={()=> setShowModal(false)} style={styleButtons}>
                        <Link href='/positions'>
                            <OrderedListOutlined style={styleIcons}/>
                        </Link>
                    </Button>
                    <Button onClick={()=> setShowModal(false)} style={styleButtons}>
                        <Link href='/users'>
                            <TeamOutlined style={styleIcons}/>
                        </Link>
                    </Button>
                    <Button onClick={()=> setShowModal(false)} style={styleButtons}>
                        <Link href='/matches'>
                            <CalendarOutlined style={styleIcons}/>
                        </Link>
                    </Button>
                    <Button onClick={()=> setShowModal(false)} style={styleButtons}>
                        <Link href='/statistics'>
                            <BarChartOutlined style={styleIcons}/>
                        </Link>
                    </Button>
                    <Button onClick={()=> setShowModal(false)} style={styleButtons}>
                        <Link href='/'>
                            <UserOutlined style={styleIcons}/>
                        </Link>
                    </Button>
                    <Button onClick={()=> setShowModal(false)} style={styleButtons}>
                        <Link href='/login'>
                            <LogoutOutlined style={styleIcons}/>
                        </Link>
                    </Button>
                </div>
            </Modal>
        </div>
    )
}

export default ModalMenu