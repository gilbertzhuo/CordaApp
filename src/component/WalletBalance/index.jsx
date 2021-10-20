import React, {useState, useEffect} from 'react';
import axios from "axios";
import {Container} from "./walletElements"
const WalletBalance = () => {
    const [user, setUser] = useState("Kiron");
    const [points, setPoints] = useState(0);
    useEffect(()=> {
        list();
    },[])
    async function list(){
        await axios.get("http://18.140.71.165:9090/getRewardState").then(
            request=>{
                setPoints((request.data.filter(item=>item.customer===user).reduce((acc, curr) => {
                    return acc = acc + parseInt(curr.point)
                }, 0)))
            }
        );
    }
    return (
        <Container>
            <h3>Points: {points}</h3>
        </Container>
    )
}
export default WalletBalance;