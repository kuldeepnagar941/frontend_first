// import React from 'react'
import { useEffect,useState } from "react"
import axios from 'axios'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';



const FetchData = () => {
    const [data,setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [search,setSearch] = useState(" ")
    const [sort,setSort] = useState("")
    const [view, setView] = useState()
    const [modelView, setModelView] = useState(false)



    useEffect(()=>{
        fetch();
    },[])

    const fetch = async ()=>{
        try {
            const response = await axios.get("https://fakestoreapi.com/products")
            setData(response.data)
            console.log(response.data)
            setLoading(false)
        } catch (error) {
            console.log("err in fetching", error)
            
        }
    }
    const filterData = data.filter((element)=>
    element.title.toLowerCase().includes (search.toLowerCase()) ||
    element.description.toLowerCase().includes (search.toLowerCase()) )

    const filterSort = () =>{
        if(sort === 'asc'){
            return [...filterData].sort((a,b)=> a.price - b.price)
        }
        if(sort === 'dec'){
            return [...filterData].sort((a,b) => b.price - a.price)
        }
        return filterData;
    }
    const singleData = async(id) =>{
        console.log(`>>>>>>>>>id>>>>>>`,id);
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
            setView(response.data)
            console.log(`>>>>single>>>`,response.data);
            setView(response.data)
            setModelView(true)
        

            
          }

          const modelCLose = () => {
            setModelView(false)
          }
              
        
    

  return (
    <>
    <input
        type='text'
        value={search}
        placeholder='search '
        onChange={(e)=>setSearch(e.target.value)}
    />
    <button onClick={() => setSort('asc')}>Low to High</button>
    <button onClick={() => setSort('dec')}>High to low</button>
    {loading ? (<h1>loading...</h1>) :(
        <div>
        {filterSort().map((item, index)=> (
            <div key={index} style={{border:"1px solid black",margin:"10px",padding:"10px"}}>
                <h3> Tittle:-{item.title}</h3>
                <h4>Category:-{item.category}</h4>
                <h5> Descreption:-{item.description}</h5>
                <h4> price:-{item.price}</h4>
                {/* <img src={item.image} style={{height:"150px",widows:"250px"}}/> */}
                <LazyLoadImage src={item.image} effect="blur" style={{height:"150px",widows:"250px"}} 
                    onLoad={()=> console.log(`my title ${item.title}`)}
                />
                <button onClick={()=>singleData(item.id)}>view deatails</button>
            </div>
        ))}
        </div>
    ) }
    <div>
    {modelView && view && (
        <div style={modalStyles.overlay}>
        <div style={modalStyles.modal}>
        <h2>Tille :-{view.title}</h2>
              <h2> Description:-{view.description}</h2>
              <h2> Price:-{view.price}</h2>
              <h2> Count :-{view.rating.count}</h2>
              <h2> Count :-{view.category}</h2>
              <LazyLoadImage
                src={view.image}
                effect='blur'
              />
              <button onClick={modelCLose}>Close</button>
        </div>
        </div>
      )}

    </div>
  





    </>
   )
}
const modalStyles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 100,
    },
    modal: {
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '5px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      width: '400px',
    },
  };
  

export default FetchData