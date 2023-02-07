import React,{useState,useEffect} from 'react'
import img from '../assets/fb.png'
import Image from 'next/image'
import { useTheme } from '@mui/material/styles';
import  {useMediaQuery}  from '@mui/material'
import Atif from '../assets/Atif.jpg'
const CreatorCard = (props) => {
  const theme=useTheme()
  const isMedia=useMediaQuery(theme.breakpoints.down('md'));
  const [state, setstate] = useState("10rem")
  useEffect(() => {
      setstate("9rem")
  }, [isMedia])
  return (
    <div className="card my-2" style={{width: `${state}`,height:"auto",marginLeft:"10px"}}>
  <Image src={Atif} height="140px" width="80px" />
  <div className="card-body">
    <h5 className="card-title">{props.name}</h5>
    <p className="card-text">0x000</p>
    <p className="card-text">{props.accountPr} <strong>ETH</strong></p>
  </div>
</div>
  )
}
export default CreatorCard