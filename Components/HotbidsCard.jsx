import React,{useState,useEffect} from 'react'
import img from '../assets/fb.png'
import Image from 'next/image'
import { useTheme } from '@mui/material/styles';
import  {useMediaQuery}  from '@mui/material'
import Atif from '../assets/Atif.jpg'
const HotbidsCard = (props) => {
  const theme=useTheme()
  const isMedia=useMediaQuery(theme.breakpoints.down('md'));
  return (
    <div className="card my-2" style={{overflow:"hidden",color:"grey",width:"auto",fontWeight:"bolder",height:"auto",borderRadius:"30px 40px 30px 40px",background:"#FAF9F6",marginLeft:"20px",marginRight:"20px"}}>
  <Image className='margint4' src={Atif} height="220px" width="100%" objectFit='contained' />
  <div className="card-body margintu8">
    <p className="text">0x000</p>   
    <p className="margintu8 marginbu5"><strong>{props.accountPr}</strong> ETH</p>
  </div>
</div>
  )
}
export default HotbidsCard;