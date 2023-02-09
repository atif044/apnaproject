import React,{useState,useEffect} from 'react'
import img from '../assets/fb.png'
import Image from 'next/image'
import { useTheme } from '@mui/material/styles';
import  {useMediaQuery}  from '@mui/material'
import Atif from '../assets/Atif.jpg'
import Link from 'next/link';
const HotbidsCard = ({nft}) => {
  const theme=useTheme()
  const isMedia=useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Link href={{pathname:'/nft-details',query:nft}} > 
    <div className="card my-2" style={{overflow:"hidden",color:"grey",width:"auto",fontWeight:"bolder",height:"auto",borderRadius:"30px 40px 30px 40px",background:"#FAF9F6",marginLeft:"20px",marginRight:"20px"}}>
  <Image className='margint4' src={Atif} height="220px" width="100%" objectFit='contained' />
  <div className="card-body margintu8">
    <p className="text">{nft.name}</p>
    <div className='marginbu10' style={{display:"flex",justifyContent:'space-between'}}>
    <p className="margintu8 marginbu5"><strong>{nft.price}</strong> ETH</p>
    <p className="text margintu8">{nft.seller}</p>   
    </div>   
  </div>
</div>
    </Link>
  )
}
export default HotbidsCard;