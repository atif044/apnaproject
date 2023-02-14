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
    <form onSubmit={(e)=>{e.preventDefault(); console.log("from ",formData)}}>
    <div className='flexb'>
    <div  className='inputfields'>
    <label className='font-dancing-20-with-m10'>Name</label>
    <input onChange={onKeyUp} name='name' className='field'/>
    <div className=''>
    <label className='font-dancing-20-with-m10'>Description</label>
    <textarea onChange={onKeyUp} name='description' rows={5} className='field disable-border-radius resize-none'/>
    </div>
    <div className=''>
    <label className='font-dancing-20-with-m10'>price</label>
    <div style={{display:"flex"}}>
    <input onChange={onKeyUp} name='price' className='field disable-border-radius'/>
    <h6 className='font-dancing-20-with-m10'>ETH</h6>
    </div>
    </div>
    <div>
      <button type='submit' className='font-dancing-20 field btn-style '>Create</button>
    </div>
    </div>
    </div>
    </form>
    
    </div>
    </>
  )
}

export default create_nft