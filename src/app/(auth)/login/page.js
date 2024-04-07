"use client"
import { useState } from 'react'
import { Row, Col } from 'antd'
import { useRouter } from 'next/navigation'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { useGetTournamentsQuery } from '@/redux/services/tournamentsApi'
import { Select } from 'antd'
import styles from "./../../ui/login.modules.css";
import Image from 'next/image'

export default function Login(){

    const router = useRouter()

    const selections = useAppSelector(state => state.tournamentsReducer.tournaments)
    const dispatch = useAppDispatch()

    const [ tournament, setTournament] = useState(null)
    const selectStyle = {
        width : '300px !important'
    }

    const ImageStyle = {
        display: 'flex !important',
        justifyContent: 'center !important',
        flexDirection: 'column !important',
        alignItems: 'center',
    }

    const { data, error, isLoading, isFetching } = useGetTournamentsQuery()

    console.log(data)
    if(isLoading || isFetching) return <>Cargando</>
    if(error) return <>Error</>
    const redirectRegister = (e) => {
        router.push('/register')
    }

    const onChangeSelect = ({torimagen}) => {
        setTournament(torimagen)
    };

    return <>
        <Row >
            <Col span={24}>

                <div>
                <Image
                    width='230'
                    height='240'
                    priority
                    src={tournament ? tournament : 'https://res.cloudinary.com/josecruz9/image/upload/v1712374907/tm3gidyzcpx3k2zlskev.png'}
                    alt='Icono torneo'
                />
                <Select
                    placeholder='Seleccionar torneo'
                    options={data.data}
                    onChange={(text, index)=> onChangeSelect(index)}
                />
                </div>

            </Col>
        </Row>
            {/* <button onClick={redirectRegister}>Registrarse</button> */}
    </>
}