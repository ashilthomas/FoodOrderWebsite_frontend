import React from "react";
import instance from "../../components/Axios";

const UserList = () => {
    const [users, setUsers] = React.useState([]);
    
 const token = sessionStorage.getItem('token');
    const fetchUsers = async () => {
      try {
        const response = await instance.get("/user/allusers",{
 headers: {
              'Authorization': ` ${token}` // Pass the token here
            }
        });    
        const data = response.data;
        console.log(data);
        setUsers(data.users);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

  React.useEffect(() => {   
 
    fetchUsers();
    }, []);
   const handleToggleActive = async (userId, currentStatus) => {

    const url = currentStatus
      ? `/user/deactivate/${userId}`
      : `/user/activate/${userId}`;
    try {
      const response = await instance.patch(url,{
 headers: { 
              'Authorization': ` ${token}` // Pass the token here 
            }
      });
   if(response.data.success){
    alert(response.data.message)
     setUsers((prevUsers) =>
        prevUsers.map((u) =>
          u._id === userId ? { ...u, isActive: !currentStatus } : u
        )
      );
   }
     
     
    } catch (error) {
      console.error("Error updating user status:", error);
    }



   }

  return (
    <div className="p-6 mt-20 ml-72">
      <h2 className="text-2xl font-semibold mb-4">User List</h2>
      <div className="overflow-x-auto rounded-2xl shadow">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-100 text-gray-700 text-left text-sm font-semibold">
            <tr>
              <th className="px-6 py-3 border-b">#</th>
              <th className="px-6 py-3 border-b">Name</th>
              <th className="px-6 py-3 border-b">Email</th>
              <th className="px-6 py-3 border-b">Role</th>
              <th className="px-6 py-3 border-b">Status</th>
              <th className="px-6 py-3 border-b text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm">
            {users.map((user, index) => (
              <tr
                key={user._id}
                className="hover:bg-gray-50 transition-colors duration-200"
              >
                <td className="px-6 py-3 border-b">{index + 1}</td>
                <td className="px-6 py-3 border-b">{user.name}</td>
                <td className="px-6 py-3 border-b">{user.email}</td>
                <td className="px-6 py-3 border-b">{user.role}</td>
                <td className="px-6 py-3 border-b">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      user.isActive
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {user.isActive ? "Active" : "Inactive"}
                  </span>
                </td>
                <td className="px-6 py-3 border-b text-center">
                  <button
                    className={`px-4 py-1 rounded-lg text-sm font-medium shadow 
                      ${
                        user.isActive
                          ? "bg-red-500 text-white hover:bg-red-600"
                          : "bg-green-500 text-white hover:bg-green-600"
                      }`}
                      onClick={() => handleToggleActive(user._id, user.isActive)}
                  >
                    {user.isActive ? "Deactivate" : "Activate"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;

