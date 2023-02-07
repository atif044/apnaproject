import {useState,useEffect,useContext} from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import images from '../assets/navlogo.png'
const Navbar = () => {
  const router=useRouter()
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
        <Link href='/'>
        <Image src={images} width="80px" height="40px"  />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav justify-content-right" >
            <Link href='/'>
              <li className="nav-item nav-link"  style={{cursor:"pointer"}}>
              Explore NFT's
              </li>
            </Link>
            <Link href='/created-nfts'>
              <li className="nav-item nav-link"  style={{cursor:"pointer"}}>
              Listed NFT'S
              </li>
            </Link>
            <Link href='/my-nfts'>
              <li className="nav-item nav-link"  style={{cursor:"pointer"}}>
              My NFT's
              </li>
            </Link>
            </ul>
            <ul className='d-flex'>
            <button onClick={()=>{router.push("/")}}  style={{marginRight:"4px",backgroundColor:"purple",color:"white",borderRadius:'360px'}}>Create Nft</button>
            <button onClick={()=>{router.push("/")}}  style={{borderRadius:"360px",background:"green",color:"white"}} >Connect</button>
            </ul>
          </div>
        </div>
        <>
        </>
      </nav>
    );
}

export default Navbar;