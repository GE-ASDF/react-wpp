import {useLoaderData} from "react-router-dom";

export default function Group(){
    const members = useLoaderData();    
    return (
        <div style={{overflowY:"auto", maxHeight:"100vh", height:"100vh"}} className="row gap-3 p-4 pb-5 justify-content-center">
            <h1 className="mt-4 mb-4">Grupos:</h1>
                <table className="table table-dark">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Contato</th>
                    </tr>
                </thead>
                <tbody>
                    {members.map((member) =>{
                    let name = member.name ? member.name: member.verifiedName ? member.verifiedName:member.pushname ? member.pushname:"Usuário sem nome"
                    return(
                        <>
                            <tr key={member.id.user}>
                                <td>{name}</td>
                                <td>{member.id._serialized}</td>
                            </tr>
                        </>
                        )
                    })}
                    </tbody>
                </table>
        </div>
    )
}