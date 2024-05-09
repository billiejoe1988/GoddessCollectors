'use client'
import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/config";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "orders"));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        setOrders(data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="bg-white p-4 rounded">
      <h2 className="text-lg font-semibold mb-4">Orders</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-900">
          <thead className="text-xs text-gray-700 uppercase bg-orange-200">
            <tr>
              <th scope="col" className="px-3 py-2 bg-orange-400">
                Order ID
              </th>
              <th scope="col" className="px-3 py-2 bg-orange-400">
                Client
              </th>
              <th scope="col" className="px-3 py-2 bg-orange-400">
                Email
              </th>
              <th scope="col" className="px-3 py-2 bg-orange-400">
                Address
              </th>
              <th scope="col" className="px-3 py-2 bg-orange-400">
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b border-gray-200">
                <td className="p-2 bg-orange-100">{order.id}</td>
                <td className="p-2">{order.client.name}</td>
                <td className="p-2 bg-orange-100">{order.client.email}</td>
                <td className="p-2">{order.client.adress}</td>
                <td className="p-2 bg-orange-100">{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
