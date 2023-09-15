
import { useState } from "react";
import { Outlet, Link, useLoaderData } from "react-router-dom";
import style from "./style.module.css";

export default function Groups(){
    const groups = useLoaderData();
    let [search, setSearch] = useState('');
    
    return (
        <div className="row">
            <div style={{overflowY:"auto", maxHeight:"100vh", height:"100vh"}} id="left-side" className={`col-lg-3 p-2 h-100 col-sm-3 ${style.leftSide}`}>
                <input onChange={(e)=>{setSearch(e.target.value);}} type="text" name="txtBusca" placeholder="Search" className="form-control"/>
                <div style={{overflowY:"auto"}} className={`${style.groupList} group-list d-flex flex-column mt-2`}>
                    {!search ? groups.map(group =>{
                        return (
                            <>
                                <Link key={group.id.user} style={{textAlign:'left'}} className="btn m-1 btn-light" to={`group/${group.id._serialized}`}>{group.name}</Link>
                            </>
                        )
                    }): groups.map(group =>{
                            if(group.name && group.name.trim().toLowerCase().includes(search.trim().toLowerCase())){
                                return (
                                    <>
                                        <Link key={group.id.user} style={{textAlign:'left'}} className="btn m-1 btn-light" to={`group/${group.id._serialized}`}>{group.name}</Link>
                                    </>
                                )
                            }
                        })
                    }
                </div>
            </div>
            <div id="right-side" className="col">
                <Outlet />
            </div>
        </div>
    )
    
}
