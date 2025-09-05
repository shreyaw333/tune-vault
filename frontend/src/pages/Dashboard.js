import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, TrendingDown, Users, DollarSign, Music } from 'lucide-react';

const Dashboard = () => {
  // Mock data for charts
  const revenueData = [
    { month: 'Oct', revenue: 985000 },
    { month: 'Nov', revenue: 1024000 },
    { month: 'Dec', revenue: 1156000 },
    { month: 'Jan', revenue: 1089000 },
    { month: 'Feb', revenue: 1134000 },
    { month: 'Mar', revenue: 1187000 },
    { month: 'Apr', revenue: 1203000 },
    { month: 'May', revenue: 1167000 },
    { month: 'Jun', revenue: 1198000 },
    { month: 'Jul', revenue: 1234000 },
    { month: 'Aug', revenue: 1189000 },
    { month: 'Sep', revenue: 1247580 }
  ];

  const platformData = [
    { name: 'Web', value: 748548, color: '#6366f1' },
    { name: 'iOS', value: 374274, color: '#8b5cf6' },
    { name: 'Android', value: 124758, color: '#06b6d4' }
  ];

  const subscriptionPlans = [
    { name: 'Premium Monthly ($9.99)', subscribers: 18453, revenue: '$184,389' },
    { name: 'Premium Annual ($99.99)', subscribers: 12847, revenue: '$1,284,315' },
    { name: 'Family Plan ($14.99)', subscribers: 3592, revenue: '$53,864' }
  ];

  const recentActivity = [
    { description: 'Large subscription upgrade batch processed', time: '2 hours ago' },
    { description: 'Monthly royalty payments initiated', time: '5 hours ago' },
    { description: 'Apple App Store revenue reconciled', time: '1 day ago' },
    { description: 'Q3 revenue report generated', time: '2 days ago' },
    { description: 'New artist onboarding completed', time: '3 days ago' }
  ];

  return (
    <div>
      <h1 className="page-title">Revenue Dashboard - September 2025</h1>

      {/* Metrics Cards */}
      <div className="metrics-grid">
        <div className="card metric-card">
          <div className="metric-title">Monthly Recurring Revenue</div>
          <div className="metric-value">$1,247,580</div>
          <div className="metric-change positive">
            <TrendingUp size={16} />
            +12.4% from last month
          </div>
        </div>

        <div className="card metric-card">
          <div className="metric-title">Active Subscriptions</div>
          <div className="metric-value">34,892</div>
          <div className="metric-change positive">
            <Users size={16} />
            +2,341 new this month
          </div>
        </div>

        <div className="card metric-card">
          <div className="metric-title">Churn Rate</div>
          <div className="metric-value">3.2%</div>
          <div className="metric-change negative">
            <TrendingDown size={16} />
            +0.4% from last month
          </div>
        </div>

        <div className="card metric-card">
          <div className="metric-title">Artist Royalties Paid</div>
          <div className="metric-value">$423,156</div>
          <div className="metric-change positive">
            <Music size={16} />
            +8.2% from last month
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="charts-grid">
        <div className="card">
          <div className="card-header">
            <div className="card-title">Revenue Trend (Last 12 Months)</div>
          </div>
          <div className="card-content">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" stroke="#666" />
                <YAxis 
                  stroke="#666"
                  tickFormatter={(value) => `$${(value / 1000)}K`}
                />
                <Tooltip 
                  formatter={(value) => [`$${value.toLocaleString()}`, 'Revenue']}
                  labelStyle={{ color: '#666' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="#6366f1" 
                  strokeWidth={3}
                  dot={{ fill: '#6366f1', strokeWidth: 2, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <div className="card-title">Revenue by Platform</div>
          </div>
          <div className="card-content">
            <div style={{ marginBottom: '1rem' }}>
              {platformData.map((platform, index) => (
                <div key={index} className="platform-item">
                  <span className="platform-name">
                    {platform.name === 'Web' && '🌐'} 
                    {platform.name === 'iOS' && '📱'} 
                    {platform.name === 'Android' && '🤖'} 
                    {platform.name}
                  </span>
                  <span className="platform-revenue">
                    ${platform.value.toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={platformData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {platformData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, 'Revenue']} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="revenue-breakdown">
        <div className="card">
          <div className="card-header">
            <div className="card-title">Subscription Plans Performance</div>
          </div>
          <div className="card-content">
            {subscriptionPlans.map((plan, index) => (
              <div key={index} className="platform-item">
                <div>
                  <div className="platform-name">{plan.name}</div>
                  <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                    {plan.subscribers.toLocaleString()} subscribers
                  </div>
                </div>
                <span className="platform-revenue">{plan.revenue}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <div className="card-title">Recent Revenue Activity</div>
          </div>
          <div className="card-content">
            {recentActivity.map((activity, index) => (
              <div key={index} className="activity-item">
                <div className="activity-description">{activity.description}</div>
                <div className="activity-time">{activity.time}</div>
              </div>
            ))}
            <button className="button" style={{ marginTop: '1rem' }}>
              View All Activities
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;