import useFetch from "../../hooks/useFetch";
import "./propertyList.css";

const PropertyList = () => {
  const { data, loading, error } = useFetch("/hotels/countByType");
  

  const images = [
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/d3/c6/ef/exterior-view.jpg?w=1200&h=-1&s=1",
    "https://www.eaglehillsmorocco.com/sites/default/files/2021-10/One_Rabat_Square_Master_Plan_Appartement_Luxe_Haut_Standing_Immobilier_Rabat_Maroc_Eagle_Hills_Morocco__.jpg",
    "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?cs=srgb&dl=pexels-pixabay-258154.jpg&fm=jpg",
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/12/ef/a1/vue-de-la-piscine.jpg?w=700&h=-1&s=1",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg",
  ];
  return (
    <div className="pList">
      {loading ? (
        "loading"
      ) : (
        <>
          {data &&
            images.map((img,i) => (
              <div className="pListItem" key={i}>
                <img
                  src={img}
                  alt=""
                  className="pListImg"
                />
                <div className="pListTitles">
                  <h1>{data[i]?.type}</h1>
                  <h2>{data[i]?.count} {data[i]?.type}</h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default PropertyList;
