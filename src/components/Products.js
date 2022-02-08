import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/actions/Actions";

const Products = () => {
    const products = useSelector((state) => state.cart.products);
    const dispatch = useDispatch();

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap'
        }}>
            {products.map((pd) => (
                <div
                    key={pd.id}
                    style={{
                        border: "1px solid green",
                        padding: "20px",
                        paddingTop: "0px",
                        borderRadius: "20px",
                        width: "200px",
                        margin: "10px",
                    }}
                >
                    <h5>{pd.name}</h5>
                    <p>Price: <b>{pd.price}</b>$</p>
                    <button
                        style={{
                            background: '#0000FF',
                            padding: '10px 20px',
                            color: '#fff'
                        }}
                        onClick={() => dispatch(addToCart(pd.id, pd.name, pd.price))}
                    >
                        Add to cart
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Products;
