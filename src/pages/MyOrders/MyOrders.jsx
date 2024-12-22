import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../provider/AuthContext';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { format } from "date-fns";
import { FaTrash } from 'react-icons/fa6';


const MyOrders = () => {
    const { user } = useContext(AuthContext)
    const [myOrders, setMyOrders] = useState()


    useEffect(() => {
        // The URL of the API endpoint
        const fetchData = async () => {
            try {
                const { data } = await axios.get(`http://localhost:3000/myOrders/${user?.email}`);
                setMyOrders(data);
                console.log(data)
            } catch (error) {
                console.log(error)
            }
        };
        fetchData();
    }, [user?.email]);
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Food Name</th>
                            <th>Owner Name</th>
                            <th>Buying Time</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            myOrders?.map((order, idx) => <tr
                                key={idx}

                            >
                                <th><img className='w-20' src={order.foodImage} alt="" /></th>
                                <td>{order?.foodName}</td>
                                <td>{order?.buyerName}</td>
                                <td>{format(order?.buyingDate, "dd/MM/yyyy")}</td>
                                <td><FaTrash/></td>
                            </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;