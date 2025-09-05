import React, { useState } from 'react';
import { Search, Filter, Download, Plus } from 'lucide-react';

const Subscriptions = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Mock subscription data
  const subscriptions = [
    {
      id: 'sub_001',
      user: 'john.doe@email.com',
      plan: 'Premium Monthly',
      status: 'active',
      platform: 'Web',
      amount: '$9.99',
      nextBilling: '2025-10-05',
      created: '2024-08-15'
    },
    {
      id: 'sub_002',
      user: 'jane.smith@email.com',
      plan: 'Premium Annual',
      status: 'active',
      platform: 'iOS',
      amount: '$99.99',
      nextBilling: '2026-03-12',
      created: '2025-03-12'
    },
    {
      id: 'sub_003',
      user: 'mike.wilson@email.com',
      plan: 'Family Plan',
      status: 'trial',
      platform: 'Android',
      amount: '$14.99',
      nextBilling: '2025-09-20',
      created: '2025-09-06'
    },
    {
      id: 'sub_004',
      user: 'sarah.jones@email.com',
      plan: 'Premium Monthly',
      status: 'cancelled',
      platform: 'Web',
      amount: '$9.99',
      nextBilling: '-',
      created: '2024-12-03'
    },
    {
      id: 'sub_005',
      user: 'david.brown@email.com',
      plan: 'Premium Annual',
      status: 'active',
      platform: 'iOS',
      amount: '$99.99',
      nextBilling: '2025-11-28',
      created: '2024-11-28'
    }
  ];

  const stats = [
    { label: 'Total Active', value: '34,892', change: '+2.1%' },
    { label: 'New This Month', value: '2,341', change: '+18.3%' },
    { label: 'Cancelled', value: '1,089', change: '-5.2%' },
    { label: 'Free Trials', value: '892', change: '+12.7%' }
  ];

  const filteredSubscriptions = subscriptions.filter(sub =>
    sub.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
    sub.plan.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1 className="page-title">Subscription Management</h1>

      {/* Stats Cards */}
      <div className="metrics-grid">
        {stats.map((stat, index) => (
          <div key={index} className="card metric-card">
            <div className="metric-title">{stat.label}</div>
            <div className="metric-value">{stat.value}</div>
            <div className={`metric-change ${stat.change.startsWith('+') ? 'positive' : 'negative'}`}>
              {stat.change} from last month
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="card" style={{ marginBottom: '2rem' }}>
        <div className="card-content">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flex: 1 }}>
              <div style={{ position: 'relative', minWidth: '300px' }}>
                <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#6b7280' }} />
                <input
                  type="text"
                  placeholder="Search subscriptions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem 0.75rem 0.75rem 2.5rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '8px',
                    fontSize: '0.875rem'
                  }}
                />
              </div>
              <button className="button secondary">
                <Filter size={18} />
                Filter
              </button>
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button className="button secondary">
                <Download size={18} />
                Export
              </button>
              <button className="button">
                <Plus size={18} />
                Add Subscription
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Subscriptions Table */}
      <div className="card">
        <div className="card-header">
          <div className="card-title">All Subscriptions ({filteredSubscriptions.length})</div>
        </div>
        <div className="card-content">
          <div style={{ overflowX: 'auto' }}>
            <table className="table">
              <thead>
                <tr>
                  <th>Subscription ID</th>
                  <th>User</th>
                  <th>Plan</th>
                  <th>Status</th>
                  <th>Platform</th>
                  <th>Amount</th>
                  <th>Next Billing</th>
                  <th>Created</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredSubscriptions.map((sub) => (
                  <tr key={sub.id}>
                    <td style={{ fontFamily: 'monospace', fontSize: '0.875rem' }}>{sub.id}</td>
                    <td>{sub.user}</td>
                    <td>{sub.plan}</td>
                    <td>
                      <span className={`status ${sub.status}`}>
                        {sub.status.charAt(0).toUpperCase() + sub.status.slice(1)}
                      </span>
                    </td>
                    <td>
                      {sub.platform === 'Web' && '🌐'} 
                      {sub.platform === 'iOS' && '📱'} 
                      {sub.platform === 'Android' && '🤖'} 
                      {sub.platform}
                    </td>
                    <td style={{ fontWeight: 'bold' }}>{sub.amount}</td>
                    <td>{sub.nextBilling}</td>
                    <td>{sub.created}</td>
                    <td>
                      <button 
                        className="button secondary" 
                        style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscriptions;