'use client'
import Link from 'next/link'
import {
	CalendarOutlined,
    BarChartOutlined,
    OrderedListOutlined,
    TeamOutlined,
    HomeOutlined
} from '@ant-design/icons';

const Footer = () => {

    const ContainerItemMenu = {
        display : 'flex',
        justifyContent: 'space-between',
        backgroundColor : '#592321',
        position : 'absolute',
        bottom : '0',
        width: '100%'
    }

    const ContainerItem = {
        backgroundColor : '#FFFFFF',
        width : '20%',
        display: 'flex',
        justifyContent:'center',
        padding : '10px',
        margin : '10px',
        borderRadius : '6px'
    }

    return (
        <nav style={ContainerItemMenu}>
            <Link style={ContainerItem} href='/'><HomeOutlined style={{color :'#592321', fontSize:'18px'}}/></Link>
            <Link style={ContainerItem} href='/'><OrderedListOutlined style={{color :'#592321', fontSize:'18px'}}/></Link>
            <Link style={ContainerItem} href='/'><TeamOutlined style={{color :'#592321', fontSize:'18px'}}/></Link>
            <Link style={ContainerItem} href='/'><CalendarOutlined style={{color :'#592321', fontSize:'18px'}}/></Link>
            <Link style={ContainerItem} href='/'><BarChartOutlined style={{color :'#592321', fontSize:'18px'}}/></Link>

            {/* <Dropdown
                menu={{
                    items,
                }}
                trigger={['click']}
                placement="bottomRight"
                arrow
                >
                <Button><UserOutlined/></Button>
            </Dropdown> */}
        </nav>
    )
}

export default Footer