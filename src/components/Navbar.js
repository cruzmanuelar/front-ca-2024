'use client'
import styles from '@/app/ui/navbar.module.css'
import { Button, Dropdown, Affix } from 'antd';

import {
	UserOutlined,
    SettingOutlined,
    LogoutOutlined,
    SwapOutlined
} from '@ant-design/icons';
import Link from 'next/link'
import ModalMenu from './ModalMenu';
import { useState } from 'react';

const Navbar = () => {

    const [showModal, setShowModal] = useState(false)
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
        <>
            <Affix offsetTop={0}>
                <nav className={styles.ContainerNavbar}>
                    <Link className={styles.TextMain} href='/'>La quinela</Link>
                    <Button
                        onClick={()=> setShowModal(true)}
                    >
                        <SettingOutlined style={{color :'#592321'}}/>
                    </Button>
                </nav>
            </Affix>
            <ModalMenu
                showModal={showModal}
                setShowModal={setShowModal}
            />
        </>
    )
}

export default Navbar