import useFetch from "../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const {data,loading,error,reFetch}=useFetch("/hotels/countByCity?cities=berlin,london")
  return (
    <div className="featured">
  {loading?"Loading please wait": ( <>  <div className="featuredItem">
        <img
src="https://cdn.pixabay.com/photo/2012/11/21/10/24/building-66789_960_720.jpg"   
       alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Berlin</h1>
          <h2>{data[0]} Properties</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
src="https://cdn.pixabay.com/photo/2012/11/21/10/24/building-66789_960_720.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Reno</h1>
          <h2>{data[1]} properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
src="https://cdn.pixabay.com/photo/2012/11/21/10/24/building-66789_960_720.jpg"          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Austin</h1>
          <h2>{data[2]} properties</h2>
        </div>
      </div></>)}
    </div>
  );
};

export default Featured;