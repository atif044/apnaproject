import Head from 'next/head'
import {useRef} from 'react'
import Creator from '../Components/Creator';
import CreatorCard from '../Components/CreatorCard';
import Banner from './../Components/Banner';
import {BsFillArrowLeftCircleFill,BsFillArrowRightCircleFill} from 'react-icons/bs'
// import {AiOutlineLeft} from 'react-icons/ai'
export default function Home() {
  const ScrollRef=useRef()
  let Creators=["Ali","Ahmad","Hamza","Atif","Bashir","Malik","Nawaz","Luqman","Mardan","Janghir","Ali","Ahmad","Hamza","Atif","Bashir","Malik","Nawaz","Luqman","Mardan","Janghir"]
  const handleScroll=(direction)=>
  {
    const {current}=ScrollRef;
    const scrollAmount=window.innerWidth>900?122:154
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

     <div ref={ScrollRef} style={{display:"flex",overflow:"hidden",marginRight:"25px",marginLeft:"20px"}}>
        {
          Creators.map(
            (element)=>{return <div ><CreatorCard name={element}/></div>}
          )
        }
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
