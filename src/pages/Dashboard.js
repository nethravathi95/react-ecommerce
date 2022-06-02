import { Fragment ,useEffect} from "react";
import {Link,NavLink} from 'react-router-dom';
import Navbar from '../components/Header/Navbar';
import useHttp from "../hooks/use-http";
import { UserData } from "../lib/api";
import CommonHeader from "../components/Header/CommonHeader";


const Dashboard =() =>{

    const name = localStorage.getItem('username');
    const email = localStorage.getItem('email');

    return <Fragment>
        <CommonHeader title={'Dashboard'} desc={name} />
        <Navbar/>
        <h1>Users Data fetch {name} </h1>
    </Fragment>;

}

export default Dashboard;