import { Table, Space } from "antd";

export default function Positions(){

    const columns = [
        {
            title: 'Pos',
            dataIndex: 'pos',
            key: 'pos',
            align: 'center'
        },
        {
            title: 'Seleccion',
            dataIndex: 'selnombre',
            key: 'selnombre',
            align: 'center'
        },
        {
            title: 'PJ',
            dataIndex: 'pj',
            key: 'pj',
            align: 'center'
        },
        {
            title: 'PG',
            dataIndex: 'pg',
            key: 'pg',
            align: 'center'
        },  
        {
            title: 'PE',
            dataIndex: 'pe',
            key: 'pe',
            align: 'center'
        },
        {
            title: 'PP',
            dataIndex: 'pp',
            key: 'pp',
            align: 'center'
        },  
        {
            title: 'G',
            dataIndex: 'goals',
            key: 'goals',
            align: 'center'
        },  
        {
            title: 'DG',
            dataIndex: 'dg',
            key: 'dg',
            align: 'center'
        },
        {
            title: 'Ptos',
            dataIndex: 'ptos',
            key: 'ptos',
            align: 'center'
        },
        {
            title: 'Forma',
            dataIndex: 'forma',
            key: 'forma',
            align: 'center'
        },
    ];

    const dataSource = [
        {
            key: '1',
            pos: 'Mike',
            selnombre: 32,
            pj: 3,
            pg: 3,
            pe: 3,
            pp: 3,
            goals: 3,
            dg: 3,
            ptos: 3,
            forma: 3,
        },
        {
            key: '2',
            pos: 'Mike',
            selnombre: 32,
            pj: 3,
            pg: 3,
            pe: 3,
            pp: 3,
            goals: 3,
            dg: 3,
            ptos: 3,
            forma: 3,
        },
        {
            key: '3',
            pos: 'Mike',
            selnombre: 32,
            pj: 3,
            pg: 3,
            pe: 3,
            pp: 3,
            goals: 3,
            dg: 3,
            ptos: 3,
            forma: 3,
        },
        {
            key: '4',
            pos: 'Mike',
            selnombre: 32,
            pj: 3,
            pg: 3,
            pe: 3,
            pp: 3,
            goals: 3,
            dg: 3,
            ptos: 3,
            forma: 3,
        },
        {
            key: '5',
            pos: 'Mike',
            selnombre: 32,
            pj: 3,
            pg: 3,
            pe: 3,
            pp: 3,
            goals: 3,
            dg: 3,
            ptos: 3,
            forma: 3,
        },
        {
            key: '6',
            pos: 'Mike',
            selnombre: 32,
            pj: 3,
            pg: 3,
            pe: 3,
            pp: 3,
            goals: 3,
            dg: 3,
            ptos: 3,
            forma: 3,
        },
        {
            key: '7',
            pos: 'Mike',
            selnombre: 32,
            pj: 3,
            pg: 3,
            pe: 3,
            pp: 3,
            goals: 3,
            dg: 3,
            ptos: 3,
            forma: 3,
        },
        {
            key: '8',
            pos: 'Mike',
            selnombre: 32,
            pj: 3,
            pg: 3,
            pe: 3,
            pp: 3,
            goals: 3,
            dg: 3,
            ptos: 3,
            forma: 3,
        },
        {
            key: '9',
            pos: 'Mike',
            selnombre: 32,
            pj: 3,
            pg: 3,
            pe: 3,
            pp: 3,
            goals: 3,
            dg: 3,
            ptos: 3,
            forma: 3,
        },
        {
            key: '10',
            pos: 'Mike',
            selnombre: 32,
            pj: 3,
            pg: 3,
            pe: 3,
            pp: 3,
            goals: 3,
            dg: 3,
            ptos: 3,
            forma: 3,
        },
    ];

    const ContainerTable = {
        display: 'flex',
        justifyContent:'center',
        alignItems:'center',
        padding : '10px',
    }
    
    return <div style={ContainerTable}>
        {/* <Table
            dataSource={dataSource}
            columns={columns}
            pagination={{
                position: ['none', 'none'],
            }}
        /> */}
    </div>
}