"use client"
import { useState } from 'react'
import { Row, Col, Typography, Select, Input, Form, Button } from 'antd'
import { useRouter } from 'next/navigation'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { useGetTournamentsQuery } from '@/redux/services/tournamentsApi'
import Image from 'next/image'
import { validateLogin } from '@/app/lib/helpers'
import { notifyAlert } from '@/app/lib/notifications'

import './../../ui/login.modules.css'

export default function Login(){

    const router = useRouter()

    const { Title } = Typography;
    const dispatch = useAppDispatch()
    const [ tournament, setTournament] = useState(null)
    const [ formLogin, setFormLogin] = useState({
        tornid : null,
        usuusuario : null,
        usucontrasenia : null
    })

    const sendLogin = () => {
        const { response, message } = validateLogin(formLogin)
        if(!response){
            notifyAlert(message)
        }
    }

    const onChangeInput = (e) => {
        setFormLogin({
            ...formLogin, [e.target.name] : e.target.value
        })
    }

    const { data, error, isLoading, isFetching } = useGetTournamentsQuery()

    if(isLoading || isFetching) return <>Cargando</>
    if(error) return <>Error</>
    const redirectRegister = (e) => {
        router.push('/register')
    }

    const onChangeSelect = ({tornid, torimagen}) => {
        setTournament(torimagen)
        setFormLogin({
            ...formLogin, tornid: tornid
        })
    };

    return <>
        <Row className='Container-Login'>
            <Col className='Card-Login'>
                <Title level={3} className='Text-Main'>La quinela de la bondad</Title>
                <div style={{display:'flex',justifyContent:'center', paddingBottom:'10px'}}>
                    <Image
                        width='230'
                        height='240'
                        priority
                        src={tournament ? tournament : 'https://res.cloudinary.com/josecruz9/image/upload/v1712374907/tm3gidyzcpx3k2zlskev.png'}
                        alt='Icono torneo'
                    />
                </div>
                <div>
                <Select
                    placeholder='Seleccionar torneo'
                    options={data.data}
                    onChange={(text, index)=> onChangeSelect(index)}
                />
                </div>

                <div className='Container-Input'>
                    <Input name='usuusuario' onChange={onChangeInput} placeholder="Usuario" />
                    <Input.Password name='usucontrasena' onChange={onChangeInput} placeholder="Contrasena" />

                    <Button onClick={sendLogin} type="primary" htmlType="submit" block>
                        Ingresar
                    </Button>
                </div>
                <div className='Container-Redirect-Login'>
                    <span onClick={redirectRegister}>No tengo cuenta</span>
                </div>
            </Col>
        </Row>
        
    </>
}