import { useEffect } from "react";
import { useParams } from "react-router-dom";


const ProductDetail = () => {
    const params = useParams
    useEffect(() => {
        console.log(params);
    }, [])

    return (
        <div className="productDetailContainer">

        </div>
    )
}

export default ProductDetail;