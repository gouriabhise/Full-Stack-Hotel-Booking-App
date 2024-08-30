import useFetch from "../hooks/useFetch";
import "./propertyList.css";

const PropertyList = () => {
  const {data,loading,error,reFetch}=useFetch("/hotels/countByType")
const images=[
  "https://cdn.pixabay.com/photo/2012/11/21/10/24/building-66789_960_720.jpg"
]

  return (
    <div className="pList">
     {loading?"loading":( <>
   { data && images.map((img,i)=>( <div className="pListItem" key={i}>
        <img
src={img}
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>{data[i]?.type}</h1>
          <h2>{data[i]?.count} {data[i]?.type}</h2>
        </div>
      </div>))}
     
     
     
     </>)}
    </div>
  );
};

export default PropertyList;