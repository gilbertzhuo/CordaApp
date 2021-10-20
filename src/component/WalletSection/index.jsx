import React, {useState, useEffect} from 'react';
import {WalletSectionContainer, WalletSectionH1, WalletSectionWrapper, WalletSectionCard, WalletSectionIcon, WalletSectionH2, WalletSectionP, WalletSectionButton, CardContainer, Input, HistoryContainer, HistoryList} from './WalletSectionElements';
import data from "./data.json";
import icon from "../../images/DBS.svg";
import axios from "axios";


const WalletSection = () => {
    const [history, setHistory] = useState();
    const [num, setNum] = useState(0);
    useEffect(()=>{
        getHistory();
    },[])
    async function getHistory() {
        await axios.get("http://18.140.71.165:9090/getRedemptionState").then(request=>{
            setHistory(request.data.filter(item=>item.customer==="Kiron"));
        })
    }
    return (
        <WalletSectionContainer>
            <WalletSectionH1>Digital Wallet</WalletSectionH1>
            <WalletSectionWrapper>
                {data.WalletSection.map(item=>{
                    return (
                         <WalletSectionCard key={item.title}>
                            <WalletSectionIcon src={icon}/>
                            <CardContainer>
                                <WalletSectionH2>Kiron's Wallet</WalletSectionH2>
                            </CardContainer>
                            <HistoryContainer>
                                <WalletSectionH2>Transaction History</WalletSectionH2>
                                {history && 
                                <HistoryList>
                                    {history.map((item,index)=>{
                                        return(
                                            <div key={index} style={{marginTop:"20px", display:"flex"}}>
                                               <div style={{display:"flex", alignItems:"center"}}><div style={{padding: "5px", background:"white", borderRadius: "5px", width:"120px", height:"40px", border: "1px solid #2F80ED", display: "flex", alignItems:"center", justifyContent:"center"}}>{item.voucher} </div> <p style={{marginLeft:"2vw"}}>{item.point}</p></div>
                                            </div>
                                        )
                                    })}
                                    
                                </HistoryList>}
                            </HistoryContainer>
                            <Input placeholder="0" onChange={(e)=>{
                                setNum(parseInt(e.target.value));
                            }}/>
                            <WalletSectionButton onClick={()=>{
                                axios.get(`http://18.140.71.165:9090/issue?customer=Kiron&&point=${num}`);
                            }}>TOPUP</WalletSectionButton>
                        </WalletSectionCard>
                    )
                })}
            </WalletSectionWrapper>
        </WalletSectionContainer>
    )
}
export default WalletSection;