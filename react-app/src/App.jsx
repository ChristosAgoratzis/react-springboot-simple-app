import React, { useState, useEffect } from "react";

const API_BASE = "http://localhost:8080";

export default function App() {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({});
  const [editingId, setEditingId] = useState(null);
  const [formVisible, setFormVisible] = useState(false);

  // Fetch Users
  const fetchUsers = async () => {
    const res = await fetch(`${API_BASE}/users`);
    const data = await res.json();
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Handle Delete
  const handleDelete = async (id) => {
    await fetch(`${API_BASE}/users/${id}`, { method: "DELETE" });
    fetchUsers();
  };

  // Handle Edit
  const handleEdit = (user) => {
    setEditingId(user.id);
    setFormData(user);
    setFormVisible(true);
  };

  // Handle Add
  const handleAdd = () => {
    setEditingId(null);
    setFormData({});
    setFormVisible(true);
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingId) {
      await fetch(`${API_BASE}/users/${editingId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
    } else {
      await fetch(`${API_BASE}/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
    }
    fetchUsers();
    setFormVisible(false);
    setFormData({});
    setEditingId(null);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Users</h1>
      <button onClick={handleAdd}>+ Add User</button>
      <table border="1" cellPadding="5" cellSpacing="0" style={{ marginTop: "10px", width: "100%" }}>
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.username}</td>
              <td>{u.email}</td>
              <td>
                <button onClick={() => handleEdit(u)}>Update</button>
                <button onClick={() => handleDelete(u.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {formVisible && (
        <div style={{ marginTop: "30px", border: "1px solid #ccc", padding: "10px" }}>
          <h2>{editingId ? "Update" : "Add"} User</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Username: </label>
              <input
                type="text"
                value={formData.username || ""}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                required
              />
            </div>
            <div>
              <label>Email: </label>
              <input
                type="email"
                value={formData.email || ""}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div>
              <label>Password: </label>
              <input
                type="password"
                value={formData.passwordHash || ""}
                onChange={(e) => setFormData({ ...formData, passwordHash: e.target.value })}
                required={!editingId}
              />
            </div>
            <div style={{ marginTop: "10px" }}>
              <button type="submit">Save</button>
              <button
                type="button"
                onClick={() => { setFormVisible(false); setFormData({}); setEditingId(null); }}
                style={{ marginLeft: "10px" }}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
