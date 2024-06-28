import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=casablanca,marrakech,fes,tanger,agadir"
  );

  return (
    <div className="featured">
      {loading ? (
        "Chargement, veuillez patienter!"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://a.travel-assets.com/findyours-php/viewfinder/images/res70/469000/469964-Hassan-Ii-Mosque.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h2>Casablanca</h2>
              <h2>{data[0]} propriétés</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://media.tacdn.com/media/attractions-splice-spp-674x446/07/38/24/94.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h2>Marrakech</h2>
              <h2>{data[1]} propriétés</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://www.e-taqafa.ma/sites/default/files/field/image/couverture/fes-01_0.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Fès</h1>
              <h2>{data[2]} propriétés</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://q-xx.bstatic.com/xdata/images/hotel/max500/474961167.jpg?k=139c47e0e65c6098530fdd5aae82a236c72fb936ee37c792ba8ecf2310f2735d&o="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Tanger</h1>
              <h2>{data[3]} propriétés</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://www.lavieeco.com/wp-content/uploads/2023/07/Agadir-Evening-1024x576.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Agadir</h1>
              <h2>{data[4]} propriétés</h2>
            </div>
          </div>
        </>
      )}
    </div>
    
  );
};

export default Featured;
