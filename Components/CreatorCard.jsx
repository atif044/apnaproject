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
    <div className="card my-2" style={{width: `${state}`,height:"auto",marginLeft:"10px",borderRadius:"30px 40px 30px 40px",background:"#FAF9F6"}}>
    <div className='margint4'>
  <Image className='image' src={Atif} height="90px" width="90px"  />
    </div>
  <div className="card-body margintu8">
    <p className="">0x000</p>
    <p className="margintu8 marginbu5">{props.accountPr} <strong>ETH</strong></p>
  </div>
</div>
  )
}
export default CreatorCard