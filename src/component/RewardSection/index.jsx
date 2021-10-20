import React from 'react';
import {RewardContainer, RewardH1, RewardWrapper, RewardCard, RewardIcon, RewardH2, RewardP, RewardButton, CardContainer} from './rewardElements';
import data from "./data.json";
import icon from "../../images/DBS.svg";
import axios from "axios";

const RewardSection = () => {
    function redeemReward(customer, voucher, point) {
        axios.get(`http://18.140.71.165:9090/redeem?voucher=${voucher}&&customer=${customer}&&point=${point}`)
        window.location.reload();
        alert("Successfully redeemed reward");
    }
    return (
        <RewardContainer>
            <RewardH1>Reward Redemption</RewardH1>
            <RewardWrapper>
                {data.Reward.map(item=>{
                    return (
                         <RewardCard key={item.title}>
                            <RewardIcon src={icon}/>
                            <CardContainer>
                                <RewardH2>{item.title}</RewardH2>
                                <RewardH2 style={{color:"lightseagreen"}}>{item.price} Points</RewardH2>
                            </CardContainer>
                            <RewardP>{item.description}</RewardP>
                            <RewardButton
                            onClick={()=>
                                redeemReward("Kiron", item.title, item.price)
                            }>REDEEM</RewardButton>
                        </RewardCard>
                    )
                })}
            </RewardWrapper>
        </RewardContainer>
    )
}
export default RewardSection;