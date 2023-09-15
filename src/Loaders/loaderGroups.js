// import { useParams } from "react-router-dom"

async function getAllGroups(){
    let groups = await fetch("http://servidorescola:3000/get-all-groups");
    let res = await groups.json();
    return res;
}

export default async function loaderGroups(){
    let groups = await getAllGroups();
    return groups;
}