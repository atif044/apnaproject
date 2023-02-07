import Head from 'next/head'
import {useRef,useState,useEffect} from 'react'
import Creator from '../Components/Creator';
import CreatorCard from '../Components/CreatorCard';
import Banner from './../Components/Banner';
import insta from '../assets/fb.png'
import Atif from '../assets/Atif.jpg'

import {BsFillArrowLeftCircleFill,BsFillArrowRightCircleFill} from 'react-icons/bs'
// import {AiOutlineLeft} from 'react-icons/ai'
export default function Home() {
  const ScrollRef=useRef()
  let Creators=["Ali","Ahmad","Hamza","Atif","Bashir","Malik","Nawaz","Luqman","Mardan","Janghir","Ali","Ahmad","Hamza","Atif","Bashir","Malik","Nawaz","Luqman","Mardan","Janghir"]
  // let Object=[
  //   {
  //       name:"Ali",
  //       img:insta,
  //       pr:0.002
  //   },
    
  //   {
  //     name:"Ahmad",
  //     img:insta,
  //     pr:0.022
  //   },
  //   {
  //     name:"Hamza",
  //     img:insta,
  //     pr:0.202
  //   },
    
  //   {
  //     name:"Khalid",
  //     img:insta,
  //     pr:0.222
  //   },
  //   {
  //     name:"Atif",
  //     img:Atif,
  //     pr:22.512
  //   }
  // ]
  const handleScroll=(direction)=>
  {
    const {current}=ScrollRef;
    const scrollAmount=154
    
    if(direction==="left")
          {
               current.scrollLeft-=scrollAmount;
          }
          else if(direction==="right")
          {
            current.scrollLeft+=scrollAmount;
          }
  }
  return (
    <>
      <Banner/>
      <Creator/>
      <div>

     <div ref={ScrollRef} className='hero'  style={{}}>
        {
          Creators.map(
            (element)=>{return <div ><CreatorCard name={element}/></div>}
          )
        }
        {/* IN CASE WE HAVE TO DEAL WITH THE OBJECTS OF ARRAY BElow is the code  */}
        {/* {
          Object.map((element,key)=> {return <div><CreatorCard accountPr={element.pr} img={element.img} name={element.name}/></div>})
        } */}
        <div onClick={()=>handleScroll("left")} style={{display:"flex",cursor:"pointer",position:"absolute",left:0,alignSelf:"center",marginLeft:"20px"}}>
            <BsFillArrowLeftCircleFill  size={25}  />
        </div>
        <div onClick={()=>handleScroll("right")} style={{display:"flex",cursor:"pointer",position:"absolute",right:0,alignSelf:"center",marginRight:"25px"}}>
        <BsFillArrowRightCircleFill  size={25}/>
        </div>
     </div>
      </div>
    </>
  )
}
