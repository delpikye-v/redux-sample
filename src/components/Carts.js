import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../redux/actions/Actions";

const Carts = () => {
    const { carts } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    return (
        <div>
            <h2 style={{ paddingLeft: '20px' }}>My cart</h2>

            {carts.map(({ id, name, size, price }) => (
                <div
                    key={id}
                    style={{
                        display: "flex",
                        marginBottom: '5px',
                        flexDirection: "row",
                        alignContent: "center",
                        marginLeft: "10px",
                        color: "#FFF",
                        backgroundColor: "#000",
                        width: "400px",
                    }}
                >
                   <button
                        style={{
                            background: '#FF0000',
                            color: '#fff'
                        }}
                        onClick={() => dispatch(removeFromCart(id))}
                    >
                        DELETE
                    </button>
                    <div style={{ padding: "10px" }}>
                        Name: <span style={{ color: '#FF0000'}}>{name}</span>
                        /---\ SLNumber: <span style={{ color: '#FF0FFF'}}> <b>{ price }</b> * {size}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Carts;
