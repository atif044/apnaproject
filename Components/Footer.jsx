import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import img from '../assets/navlogo1.png'
import fb from '../assets/fb.png'
import inst from '../assets/inst.png'
import { useTheme } from '@mui/material/styles';
import  {useMediaQuery}  from '@mui/material'
const Footer = () => {
    const theme=useTheme()
    const router=useRouter()

    const isMedia=useMediaQuery(theme.breakpoints.down("632"))

  return (
    !isMedia ? <footer>
        <div style={{display:"flex",justifyContent:"space-evenly"}}>
            <div style={{display:"flex",flexDirection:"column"}}>
                <div style={{color:"purple",fontWeight:"bolder",textAlign:"center"}}>
                    ABOUT US
                </div>
                <div style={{display:"flex",marginBottom:"4px"}}>
                <Image src={inst} height="20" width='30px'/>
                   <h6 style={{marginLeft:"4px",cursor:"pointer"}} onClick={()=>router.push("www.instagram.com/atifnadeem_",{shallow:true})}>@supremeforce786</h6> 
                </div>
                <div style={{display:"flex",marginBottom:"4px"}}>
                <Image src={fb} height="20" width='35px'/>
                <h6>@supremeforce786</h6> 
                </div>
                <div style={{display:"flex"}}>
                <Image src={img} height="20" width='30px'/>
                   <h6 style={{marginLeft:"4px"}}>@supremeforce786</h6> 
                </div>
            </div>
            <div style={{display:"flex",flexDirection:"column"}}>
                <div style={{color:"purple",fontWeight:"bolder",textAlign:"center"}}>
                    CONTACT US
                </div>
                <div style={{display:"flex"}}>
                <input style={{height:"20px",outline:"none"}} placeholder="Email Me"/> 
                <button style={{height:"20px",fontSize:"10px",background:"purple",color:"white",fontWight:"bolder"}}><b>Email</b></button>
                </div>
                <div style={{display:"flex"}}>
                <Image src={img} height="20" width='30px'/>
                   <h6 style={{marginLeft:"4px"}}>@supremeforce786</h6> 
                </div>
                <div style={{display:"flex"}}>
                <Image src={img} height="20" width='30px'/>
                   <h6 style={{marginLeft:"4px"}}>@supremeforce786</h6> 
                </div>
            </div>
            <div style={{display:"flex",flexDirection:"column"}}>
                <div style={{color:"purple",fontWeight:"bolder",textAlign:"center"}}>
                    HELP & SUPPORT
                </div>
                {
                    ["Privacy Policy","Help & Support","Legal"].map(
                        (value,index)=><h6 id={`${index}`} style={{marginLeft:"4px",cursor:"pointer"}}>{value}</h6>
                    )
                }
            </div>
        </div>
        <p style={{color:"grey",fontWeight:"bolder",fontSize:"16px",textAlign:"center"}}>&#169; All rights reserved by FSK and supremeforce </p>
    </footer>:
    <footer>
    <div style={{display:"flex",flexDirection:"column"}}>
        <div style={{display:"flex",flexDirection:"column",marginBottom:"15px"}}>
            <div style={{color:"purple",fontWeight:"bolder",textAlign:"center"}}>
                ABOUT US
            </div>
            <div style={{display:"flex",justifyContent:"center",marginBottom:"4px"}}>
            <Image src={inst} height="20" width='30px'/>
               <h6 style={{marginLeft:"4px"}}>@supremeforce786</h6> 
            </div>
            <div style={{display:"flex",justifyContent:"center",marginBottom:"4px"}}>
            <Image src={fb} height="20" width='35px'/>
               <h6>@supremeforce786</h6> 
            </div>
            <div style={{display:"flex",justifyContent:"center",marginBottom:"4px"}}>
            <Image src={img} height="20" width='30px'/>
               <h6 style={{marginLeft:"4px"}}>@supremeforce786</h6> 
            </div>
        </div>
        <div style={{display:"flex",flexDirection:"column",marginBottom:"15px"}}>
            <div style={{color:"purple",fontWeight:"bolder",textAlign:"center"}}>
                CONTACT US
            </div>
            <div style={{display:"flex",justifyContent:"center"}}>
                <input style={{height:"20px",outline:"none"}} placeholder="Email Me"/> 
                <button style={{height:"20px",fontSize:"10px",background:"purple",color:"white",fontWight:"bolder"}}>Email</button>
                </div>
            <div style={{display:"flex",justifyContent:"center"}}>
            <Image src={img} height="20" width='30px'/>
               <h6 style={{marginLeft:"4px"}}>@supremeforce786</h6> 
            </div>
            <div style={{display:"flex",justifyContent:"center"}}>
            <Image src={img} height="20" width='30px'/>
               <h6 style={{marginLeft:"4px"}}>@supremeforce786</h6> 
            </div>
        </div>
        <div style={{display:"flex",flexDirection:"column"}}>
                <div style={{color:"purple",fontWeight:"bolder",textAlign:"center"}}>
                    HELP & SUPPORT
                </div>
                {
                    ["Privacy Policy","Help & Support","Legal"].map(
                        (value,index)=> <div key={index} style={{display:"flex",justifyContent:"center",cursor:"pointer"}}><h6 id={`${index}`} style={{marginLeft:"4px"}}>{value}</h6></div>
                    )
                }
                
            </div>
         </div>
         <p style={{color:"grey",fontWeight:"bolder",fontSize:"16px",textAlign:"center"}}>&#169; All rights reserved by FSK and supremeforce </p>
</footer>
  )
}

export default Footer