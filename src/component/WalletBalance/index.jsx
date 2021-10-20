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
        await axios.get("https://81upvs6ktl.execute-api.ap-southeast-1.amazonaws.com/Corda/getRewardState").then(
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