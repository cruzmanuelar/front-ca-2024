'use client'

import Image from "next/image";
import styles from "./ui/page.module.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Typography, Row, Col } from 'antd'

import {
	FileExcelOutlined
} from '@ant-design/icons';


export default function Home() {

    const { Title } = Typography;

	const ContainerMatches = {
		display: "flex",
		justifyContent: "space-between",
		alignItems : 'center',
	};

	const ContainerMatch = {
		display : 'flex',
		justifyContent : 'center',
		alignItems : 'center',
		flexDirection : 'column',
	}

	const ContainerMain = {
	}

	return (
		<div style={ContainerMain}>
			{/* <Navbar /> */}
			<Row style={ContainerMatches}>
				<Col style={ContainerMatch}>
					<Title level={4} style={{textAlign:'center'}}>No se encontraron partidos para jornada anterior</Title>
					<FileExcelOutlined style={{fontSize:'50px'}}/>
				</Col>
				<Col style={ContainerMatch}>Fecha Actual</Col>
			</Row>
			{/* <Footer /> */}
		</div>
	);
}
