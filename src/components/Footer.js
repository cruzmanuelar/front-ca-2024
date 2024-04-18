'use client'
import Link from 'next/link'
import {
	CalendarOutlined,
    BarChartOutlined,
    OrderedListOutlined,
    TeamOutlined,
    HomeOutlined
} from '@ant-design/icons';
import { Affix, Tooltip } from 'antd';

const Footer = () => {

    const ContainerItemMenu = {
        display : 'flex',
        justifyContent: 'space-between',
        backgroundColor : '#592321',
        position : 'absolute',
        bottom : '0',
        width: '100%',
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

    const styleIcons = {
        color :'#592321',
        fontSize:'18px'
    }

    return (
        <Affix offsetBottom={0}>
            <nav style={ContainerItemMenu}>
                <Tooltip placement="top" title='Home'>
                    <Link style={ContainerItem} href='/'>
                            <HomeOutlined style={styleIcons}/>
                    </Link>
                </Tooltip>

                
                <Tooltip placement="top" title='Tabla selecciones'>
                    <Link style={ContainerItem} href='/positions'>
                        <OrderedListOutlined style={styleIcons}/>
                    </Link>
                </Tooltip>

                <Tooltip placement="top" title='Tabla usuarios'>
                    <Link style={ContainerItem} href='/users'>
                        <TeamOutlined style={styleIcons}/>
                    </Link>
                </Tooltip>
                <Tooltip placement="top" title='Calendario'>
                    <Link style={ContainerItem} href='/matches'>
                        <CalendarOutlined style={styleIcons}/>
                    </Link>
                </Tooltip>

                <Tooltip placement="top" title='Estadisticas'>
                    <Link style={ContainerItem} href='/statistics'>
                            <BarChartOutlined style={styleIcons}/>
                    </Link>
                </Tooltip>

            </nav>
        </Affix>
    )
}

export default Footer