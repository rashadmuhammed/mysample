import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Http.css";

function Http() {
  const [api, setApi] = useState([]);
  const[search,setSearch]=useState("");
  const[dummyMovies,setDummyMovies]=useState([]);
  useEffect(() => {
    axios
      .get("http://www.omdbapi.com/?apikey=1049161a&s=spiderman")
      .then((responce) => {
        
        setApi(responce.data.Search);
        setDummyMovies(responce.data.Search);
      })
      .catch((responce) => {
        console.log(responce.data, "!!failed");
      });
  },[]);
  const searchChangeHandler=(event)=>{
    setSearch(event.target.value)
    console.log(event.target.value)
    // setApi(dummyMovies);//it wont work that time is taking more for variable updating
    let m=dummyMovies;
    // console.log(dummyMovies)
    
   let k=m.filter((fltd)=>{console.log(fltd)
    return fltd.Title.startsWith(event.target.value)})
   console.log(k)
   
    setApi(k)
    

  }


  return (
    <>
      <div className="container fetch_data">
        <div className="row search">
          <div className="col-12 bg-yellow">
            <h1 className="heading">movie list</h1>
         
          <div className="col-12 button">
            <input
              // className="form-control border-end-0 border rounded-pill"
              className="form-control border-end-0 border rounded-pill newsearch"
              type="search"
              value={search}
              id="example-search-input"
              onChange={searchChangeHandler}
              placeholder="search.........."
            />
          </div>
          </div>

          
        </div>
        <button
            class=" search_button text-align-center btn btn-outline-warning  border-bottom-0 border rounded-pill ms-n5 search_button "
            type="button"
          >
            search
          </button>
        <div className="row movies_card">
          {api.map((obj, index) => {
            return (
              <div key={index} className="col col-sm-6 col-lg-4 col-xl-3 pr-0 pb-3 main">
                <div className="container">
                  <div className="row">
                    <div className="card">
                      <span className="title">
                      {obj.Title} 
                      </span>
                      <img className="img img-hover-zoom--xyz "
                        src={
                          obj.Poster && obj.Poster !== "N/A"
                            ? obj.Poster
                            : "https://via.placeholder.com/300x400"
                        }
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Http;
