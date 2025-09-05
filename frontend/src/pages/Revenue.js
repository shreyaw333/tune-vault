import React from 'react';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { DollarSign, TrendingUp, Calendar, FileText } from 'lucide-react';

const Revenue = () => {
  const revenueData = [
    { month: 'Jan', recognized: 1089000, deferred: 245000, total: 1334000 },
    { month: 'Feb', recognized: 1134000, deferred: 267000, total: 1401000 },
    { month: 'Mar', recognized: 1187000, deferred: 289000, total: 1476000 },
    { month: 'Apr', recognized: 1203000, deferred: 298000, total: 1501000 },
    { month: 'May', recognized: 1167000, deferred: 312000, total: 1479000 },
    { month: 'Jun', recognized: 1198000, deferred: 334000, total: 1532000 },
    { month: 'Jul', recognized: 1234000, deferred: 356000, total: 1590000 },
    { month: 'Aug', recognized: 1189000, deferred: 378000, total: 1567000 },
    { month: 'Sep', recognized: 1247580, deferred: 392000, total: 1639580 }
  ];

  const platformRevenue = [
    { platform: 'Stripe (Web)', amount: 748548, percentage: 60.0, growth: 12.4 },
    { platform: 'Apple App Store', amount: 374274, percentage: 30.0, growth: 8.7 },
    { platform: 'Google Play', amount: 124758, percentage: 10.0, growth: 15.2 }
  ];

  const revenueMetrics = [
    {
      title: 'Recognized Revenue',
      value: '$1,247,580',
      change: '+12.4%',
      icon: DollarSign,
      description: 'ASC 606 compliant recognition'
    },
    {
      title: 'Deferred Revenue',
      value: '$392,000',
      change: '+8.9%',
      icon: Calendar,
      description: 'Future billing periods'
    },
    {
      title: 'Total Collected',
      value: '$1,639,580',
      change: '+10.8%',
      icon: TrendingUp,
      description: 'All platform collections'
    },
    {
      title: 'Monthly Reports',
      value: '47',
      change: 'Generated',
      icon: FileText,
      description: 'Automated compliance reports'
    }
  ];

  const recentTransactions = [
    {
      id: 'txn_001',
      type: 'Subscription Payment',
      platform: 'Stripe',
      amount: 9.99,
      status: 'Recognized',
      date: '2025-09-05'
    },
    {
      id: 'txn_002',
      type: 'Annual Subscription',
      platform: 'Apple',
      amount: 99.99,
      status: 'Deferred',
      date: '2025-09-05'
    },
    {
      id: 'txn_003',
      type: 'Family Plan',
      platform: 'Google',
      amount: 14.99,
      status: 'Recognized',
      date: '2025-09-04'
    },
    {
      id: 'txn_004',
      type: 'Subscription Upgrade',
      platform: 'Stripe',
      amount: 5.00,
      status: 'Recognized',
      date: '2025-09-04'
    }
  ];

  return (
    <div>
      <h1 className="page-title">Revenue Management</h1>

      {/* Revenue Metrics */}
      <div className="metrics-grid">
        {revenueMetrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div key={index} className="card metric-card">
              <div className="metric-title">
                <Icon size={16} style={{ display: 'inline', marginRight: '0.5rem' }} />
                {metric.title}
              </div>
              <div className="metric-value">{metric.value}</div>
              <div className="metric-change positive">
                {metric.change}
              </div>
              <div style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '0.25rem' }}>
                {metric.description}
              </div>
            </div>
          );
        })}
      </div>

      {/* Revenue Recognition Chart */}
      <div className="card" style={{ marginBottom: '2rem' }}>
        <div className="card-header">
          <div className="card-title">Revenue Recognition (ASC 606 Compliant)</div>
        </div>
        <div className="card-content">
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" stroke="#666" />
              <YAxis 
                stroke="#666"
                tickFormatter={(value) => `$${(value / 1000)}K`}
              />
              <Tooltip 
                formatter={(value, name) => [
                  `$${value.toLocaleString()}`, 
                  name === 'recognized' ? 'Recognized Revenue' : 
                  name === 'deferred' ? 'Deferred Revenue' : 'Total Revenue'
                ]}
                labelStyle={{ color: '#666' }}
              />
              <Area 
                type="monotone" 
                dataKey="total" 
                stackId="1"
                stroke="#e5e7eb" 
                fill="#e5e7eb"
                fillOpacity={0.6}
              />
              <Area 
                type="monotone" 
                dataKey="recognized" 
                stackId="2"
                stroke="#6366f1" 
                fill="#6366f1"
                fillOpacity={0.8}
              />
              <Area 
                type="monotone" 
                dataKey="deferred" 
                stackId="3"
                stroke="#f59e0b" 
                fill="#f59e0b"
                fillOpacity={0.6}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        {/* Platform Revenue Breakdown */}
        <div className="card">
          <div className="card-header">
            <div className="card-title">Revenue by Platform</div>
          </div>
          <div className="card-content">
            {platformRevenue.map((platform, index) => (
              <div key={index} style={{ marginBottom: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span style={{ fontWeight: '600' }}>{platform.platform}</span>
                  <span style={{ fontWeight: 'bold', color: '#6366f1' }}>
                    ${platform.amount.toLocaleString()}
                  </span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                    {platform.percentage}% of total
                  </span>
                  <span className="metric-change positive" style={{ fontSize: '0.875rem' }}>
                    +{platform.growth}%
                  </span>
                </div>
                <div style={{ 
                  width: '100%', 
                  height: '6px', 
                  background: '#f3f4f6', 
                  borderRadius: '3px',
                  overflow: 'hidden'
                }}>
                  <div style={{ 
                    width: `${platform.percentage}%`, 
                    height: '100%', 
                    background: '#6366f1',
                    transition: 'width 0.3s ease'
                  }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="card">
          <div className="card-header">
            <div className="card-title">Recent Revenue Transactions</div>
          </div>
          <div className="card-content">
            <div style={{ overflowX: 'auto' }}>
              <table className="table">
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>Platform</th>
                    <th>Amount</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentTransactions.map((txn) => (
                    <tr key={txn.id}>
                      <td style={{ fontSize: '0.875rem' }}>{txn.type}</td>
                      <td>
                        <span className="status active" style={{ 
                          background: 'rgba(99, 102, 241, 0.1)', 
                          color: '#6366f1',
                          fontSize: '0.75rem'
                        }}>
                          {txn.platform}
                        </span>
                      </td>
                      <td style={{ fontWeight: 'bold' }}>${txn.amount}</td>
                      <td>
                        <span className={`status ${txn.status.toLowerCase() === 'recognized' ? 'active' : 'trial'}`}>
                          {txn.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button className="button" style={{ marginTop: '1rem', width: '100%' }}>
              View All Transactions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Revenue;