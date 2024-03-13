"use client";

import { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);
//   console.log(users);
  return (
    <div>
      <h1 className="text-3xl text-center p-2">Total users: {users?.length}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users?.map((user) => (
          <div key={user.id}>
            <div className="card card-compact my-5  bg-gray-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Name: {user.name}</h2>
                <p>username: {user.username}</p>
                <p>email: {user.email}</p>
                <p>website: {user.website}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Users;
