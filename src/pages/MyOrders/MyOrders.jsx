import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../provider/AuthContext';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { format } from "date-fns";
import { FaTrash } from 'react-icons/fa6';
import toast from 'react-hot-toast';


const MyOrders = () => {
    const { user } = useContext(AuthContext)
    const [myOrders, setMyOrders] = useState([])


    useEffect(() => {
        // The URL of the API endpoint
        const fetchData = async () => {
            try {
                const { data } = await axios.get(`https://assignment-11-server-neon-eta.vercel.app/myOrders/${user?.email}`, {withCredentials: true});
                setMyOrders(data);
            } catch (error) {
                
            }
        };
        fetchData();
    }, [user?.email]);


    const modernDelete = (id) =>{
        toast(
            (t) => (
              <span className='flex gap-2 justify-center items-center'>
                Are you <b>sure?</b>
                <button className='btn bg-red-600 text-white' 
                onClick={()=>{
                  toast.dismiss(t.id)
                  handleDelete(id)
                }}
                >Yes</button>
                <button className='btn bg-green-700 text-white' onClick={() => toast.dismiss(t.id)}>Cancel</button>
              </span>
            ),
          );
    }

    const handleDelete = async(id) => {

        try {
            const { data } = await axios.delete(`https://assignment-11-server-neon-eta.vercel.app/myOrders/${id}`);
            const filterData = myOrders.filter((d)=>d._id !== id)
            setMyOrders(filterData)
            toast("Delete Successfully")
        } catch (error) {
            
        }

    }

    if(myOrders.length === 0 || !myOrders) {
        return <h2 className="text-3xl md:text-5xl text-primaryColor font-bold text-center">You haven't placed any order yet</h2>
    }

    return (
        <div className='my-14 container mx-auto px-4'>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Food Image</th>
                            <th>Food Name</th>
                            <th>Owner Name</th>
                            <th>Buying Time</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            myOrders?.map((order, idx) => <tr
                                key={idx}

                            >   <th>{idx+1}</th>
                                <th><img className='w-20 h-20 object-cover' src={order.foodImage} alt="" /></th>
                                <td>{order?.foodName}</td>
                                <td>{order?.buyerName}</td>
                                <td>{format(order?.buyingDate, "dd/MM/yyyy")}</td>
                                <td><button className='text-red-500 text-2xl' onClick={()=>modernDelete(order?._id)}><FaTrash /></button></td>
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