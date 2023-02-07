import React from 'react'
import  Image  from 'next/image';
import insta from '../assets/inst.png'
import fb from '../assets/fb.png'
import logo from '../assets/navlogo.png'
const Banner = () => {
  return (
    <div style={{display:"flex",flexDirection:"column",background:"green",marginLeft:"20px",marginRight:"20px",borderRadius:"20px 30px 20px 30px",color:"white",fontWeight:"bold",fontFamily:"sans-serif"}}>

        <div style={{display:"flex",marginLeft:"20px",marginTop:"20px",marginTop:"20px",fontStyle:"italic",justifyContent:"center",alignItems:"center",width:"auto"}}>
            <h6 style={{fontSize:"28px"}}>Discover, Collect and Sell extra-ordinary NFT's.</h6>
        </div>
        <div style={{display:"flex",justifyContent:"space-evenly",marginBottom:"20px"}}>
            <Image src={insta} height="40" width="30px"/>
            <Image src={fb} height="40" width="30px"/>
            <Image src={logo} height="40" width="30px"/>
        </div>
    </div>
  )
}

export default Banner