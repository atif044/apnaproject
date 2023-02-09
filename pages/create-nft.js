import React,{useState,useMemo,useCallback,useContext} from 'react'
import { useRouter } from 'next/router'
import { useDropzone } from 'react-dropzone'
import {BsImageFill} from 'react-icons/bs'
import Image from 'next/image'
const create_nft = () => {
  const [filterUrl,setfilterUrl]=useState(null)
  const [formData,setformData]=useState({name:"",description:"",price:""})
  const onKeyUp=(e)=>
  {
    setformData({...formData,[e.target.name]:e.target.value})
    console.log(formData)
  }
  const onDrop=useCallback(()=>
  {

  },[]);
  const {getRootProps,getInputProps,isDragAccept,isDragReject,isDragActive}=useDropzone(
    {
      onDrop,
      accept:'images/*',
      maxSize:5000000
    }
  )

  const fileStyle=useMemo(()=>(
    `imgupload`
  ),[])
  return (
    <>
    <div style={{marginLeft:"20px",marginRight:"20px"}}>
    <h4 style={{fontStyle:"italic",color:"grey",marginTop:"20px"}}>
        Create a NFT
    </h4>
    <div className='flexb'>
    <div {...getRootProps()} className={fileStyle}>
    <input {...getInputProps()}/>
    <div className='margint10'>
      JPG,PNG,GIF,SVG,WEBM MAX(100MB)
    </div>
    <div className='margint40'>
    <BsImageFill size={80}/>
    </div>
    <h6 className='margint40'>
      Drag and Drop or Browse from Files
    </h6>
    {
      !filterUrl && (
        <aside>
          <img src={filterUrl}/>
        </aside>
      )
    }
    </div>
    </div>
    {/* INPUT FORM */}
    <form>
    <div className='flexb'>
    <div  className='inputfields'>
    <label className='font-dancing-20-with-m10'>Name</label>
    <input className='field'/>
    <div className=''>
    <label className='font-dancing-20-with-m10'>Description</label>
    <textarea rows={5} className='field disable-border-radius resize-none'/>
    </div>
    <div className=''>
    <label className='font-dancing-20-with-m10'>price</label>
    <input className='field'/>
    </div>
    </div>
    </div>
    </form>
    
    </div>
    </>
  )
}

export default create_nft