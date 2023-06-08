import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';




const AllUsers = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://hospital-and-doctor-management-system-server.vercel.app/users');
            const data = await res.json();
            return data;
        }
    });

    const handelMakeAdmin = id => {
        fetch(`https://hospital-and-doctor-management-system-server.vercel.app/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Make admin successful')
                    refetch();
                }
            })

    }

    return (
        <div>
            <h2 className='text-3xl'>All Users</h2>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) => <tr>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user?.role !== 'admin' && <button onClick={() => handelMakeAdmin(user._id)}
                                    className='btn btn-xl btn-primary'>Make Admin</button>}</td>
                                <td>
                                    {/* admin role  */}
                                {user?.role === 'admin' && <button
                                    className='btn btn-xl btn-primary'><AdminPanelSettingsIcon/></button>}
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;