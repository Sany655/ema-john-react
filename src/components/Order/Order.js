import React, { useEffect, useState } from 'react'
import useAuth from '../../hooks/useAuth';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './order.css'
function Order() {

    const history = useHistory()
    const { user } = useAuth()
    const [load, setLoad] = useState(true)
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        axios(`/orders?email=${user.email}`, {
            headers: {
                'authorization': `Bearer ${localStorage.getItem('idToken')}`
            }
        }).then(async order => {
            const keys = []
            order.data.map(d => Object.keys(d.order).forEach((a, i) => (!keys.find(c => c == a) && keys.push(a))))
            const prods = await axios.post('/products/byKeys', keys);
            setOrders(order.data.map((orderdata) => ({
                ...orderdata, products: Object.keys(orderdata.order).map(pk => {
                    const d = prods.data.find(k => k.key === pk)
                    d.quantity = orderdata.order[pk]
                    return d;
                })
            })))
        }).finally(() => {
            setLoad(false)
        })
    }, [])

    if (load) {
        return (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '70vh' }}>
                <img src='./spin.gif' />
            </div>
        )
    } else {

        return (
            <div style={{margin:"25px"}}>
                {orders.length ? <div>
                    <h1>Total placed orders {orders.length}</h1>
                    {
                        orders.map((order, key) => (
                            <aside key={key}>
                                <h3>Order no : {order._id}</h3>
                                <span>Ordered Date : {order.createdAt}</span>
                                <table>
                                    <thead>
                                        <tr>
                                            <td>Name</td>
                                            <td>Quantity</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            order.products.map(prod => (
                                                <tr key={prod._id}>
                                                    <td>{prod.name}</td>
                                                    <td>{prod.quantity}</td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                                <hr />
                            </aside>
                        ))
                    }
                </div> : <h1 style={{ textAlign: 'center' }}>Nothing ordered</h1>}
            </div>
        )
    }
}

export default Order
