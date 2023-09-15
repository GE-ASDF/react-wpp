// import { useParams } from "react-router-dom"


/**
 * 
 * @param {int} groupId 
 * @returns
 */

// Esta função busca os membros de um grupo a partir da variável groupId
async function getMembers(groupId){
    let data = await fetch("http://servidorescola:3000/get-all-by-id/"+groupId)
    let members = await data.json();
    return members;
}

export default async function groupMembers({params}){
    const members = await getMembers(params.groupId)
    return members;
}