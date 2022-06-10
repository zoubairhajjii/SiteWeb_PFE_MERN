import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const [prod, setProd] = useState(null);

  useEffect(() => {
    axios
      .get(
        "http://localhost:5000/api/Service/getProductDetail/" +
          location.state.id
      )
      .then((res) => setProd(res.data.ListOfService));
    console.log("it's id " + location.state.id);
    console.log(location.state);
    console.log(id);
  }, []);

  if (prod == null) {
    return <div>Loading</div>;
  }
  return (
    <>
      <div className="Container emp profile">
        <form method="">
          <div className="row">
            <div className="col-md-4">
            <img src={prod.image} alt="" />
          </div>
          <div className="col-md-6">
            <img src={prod.image} alt="" />
            <div className="profile-head"></div>
          </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ProductDetail;
