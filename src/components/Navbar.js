'use client'
import styles from '@/app/ui/navbar.module.css'
import { Button, Dropdown } from 'antd';

import {
	UserOutlined,
    SettingOutlined,
    LogoutOutlined,
    SwapOutlined
} from '@ant-design/icons';
import Link from 'next/link'

const Navbar = () => {

    const items = [
        {
            key: '1',
            label: (
                <Link href='/login' className={styles.ContainerItemMenu}>
                    <SwapOutlined />Ir a Copa America
                </Link>
            ),
        },
        {
            key: '2',
            label: (
                <Link href='/login' className={styles.ContainerItemMenu}>
                    <UserOutlined/>Mi cuenta
                </Link>
            ),
        },
        {
            key: '3',
            label: (
                <Link href='/login' className={styles.ContainerItemMenu}>
                    <LogoutOutlined />Salir
                </Link>
            ),
        }
    ];

    return (
        <nav className={styles.ContainerNavbar}>
            <Link className={styles.TextMain} href='/'>La quinela</Link>
            <Dropdown
                menu={{
                    items,
                }}
                trigger={['click']}
                placement="bottomRight"
                arrow
                >
                <Button><SettingOutlined style={{color :'#592321'}}/></Button>
            </Dropdown>
        </nav>
    )
}

export default Navbar