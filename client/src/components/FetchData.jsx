import React, { useEffect,useState } from 'react'
import axios from "axios"
const FetchData =  ({cat}) => {
  const [Data, setData] = useState("");
const fetchData=async()=>{await axios.get(cat?`https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=1f9b2adaf29547768019465009699cdd`:"https://newsapi.org/v2/top-headlines?country=in&apiKey=1f9b2adaf29547768019465009699cdd")
.then((res) => setData(res.data.articles));
};
useEffect(()=>{fetchData();},[cat])
  return (
    <div className='container my-4'><h3><u>TOP HEADLINES</u></h3>
    <div className="container d-flex justify-content-center align-items-center  flex-column  my-3 " style={{minHeight:"100vh"}}>{Data?Data.map((items,index)=><>
    <div className='container my-3' style={{width:"600px",boxShadow:"2px 2px 10px silver", borderRadius:"12px" }}><h5 className='my-3'>{items.title}</h5>
    <div className='d-flex justify-content-center align-items-center  flex-column'>    <img src={items.urlToImage} alt="Image not found" className="img-fluid" style={{width:"100%",height:"300px",objectFit:"cover"}}/>
</div>
    <p  className='my1'>{items.content}</p>
    <a href={items.url} target='blank'>View more</a>
    </div></>):"Loading"}</div>
    </div>

  )
}

export default FetchData