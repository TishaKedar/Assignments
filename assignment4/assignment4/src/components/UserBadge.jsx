import { useState } from 'react';

function UserBadge() {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [isVerified, setIsVerified] = useState(false);

  return (
    <div style={{ border: '1px solid gray', padding: '10px', marginBottom: '10px' }}>
      <h3>User Badge</h3>
      <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} /><br />
      <input placeholder="Role" value={role} onChange={(e) => setRole(e.target.value)} /><br />
      <label>
        Verified? 
        <input type="checkbox" checked={isVerified} onChange={(e) => setIsVerified(e.target.checked)} />
      </label>

      <div style={{ marginTop: '10px', color: isVerified ? 'green' : 'red' }}>
        <strong>{name}</strong> ({role}) – {isVerified ? "✅ Verified" : "❌ Not Verified"}
      </div>
    </div>
  );
}

export default UserBadge;
