

export default function DashboardLayout({children, analytics, chat, video}){


    //layout comparte estado, template no comparte estado
    return (
        <>
            {children}
            <div>{video}</div>
            <div>{analytics}</div>
            <input type='text'/>
        </>
    )
}