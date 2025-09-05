import React from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Users, Target, AlertCircle } from 'lucide-react';

const Analytics = () => {
  const forecastData = [
    { month: 'Oct', actual: 1247580, forecast: 1285000 },
    { month: 'Nov', actual: null, forecast: 1320000 },
    { month: 'Dec', actual: null, forecast: 1398000 },
    { month: 'Jan', actual: null, forecast: 1425000 },
    { month: 'Feb', actual: null, forecast: 1461000 },
    { month: 'Mar', actual: null, forecast: 1503000 }
  ];

  const churnData = [
    { month: 'Apr', rate: 2.8, cohort: 'Q1 2024' },
    { month: 'May', rate: 3.1, cohort: 'Q1 2024' },
    { month: 'Jun', rate: 2.9, cohort: 'Q2 2024' },
    { month: 'Jul', rate: 3.4, cohort: 'Q2 2024' },
    { month: 'Aug', rate: 3.0, cohort: 'Q3 2024' },
    { month: 'Sep', rate: 3.2, cohort: 'Q3 2024' }
  ];

  const cohortData = [
    { cohort: 'Jan 2025', month1: 100, month2: 87, month3: 79, month4: 74, month5: 71, month6: 68 },
    { cohort: 'Feb 2025', month1: 100, month2: 89, month3: 82, month4: 78, month5: 75, month6: null },
    { cohort: 'Mar 2025', month1: 100, month2: 91, month3: 85, month4: 81, month5: null, month6: null },
    { cohort: 'Apr 2025', month1: 100, month2: 88, month3: 83, month4: null, month5: null, month6: null },
    { cohort: 'May 2025', month1: 100, month2: 90, month3: null, month4: null, month5: null, month6: null },
    { cohort: 'Jun 2025', month1: 100, month2: null, month3: null, month4: null, month5: null, month6: null }
  ];

  const conversionData = [
    { name: 'Free Trial', value: 2847, color: '#e5e7eb' },
    { name: 'Trial to Paid', value: 1982, color: '#fbbf24' },
    { name: 'Active Subscribers', value: 34892, color: '#6366f1' }
  ];

  const kpiMetrics = [
    {
      title: 'Customer Lifetime Value',
      value: '$342.50',
      change: '+5.8%',
      icon: Target,
      description: 'Average CLV across all plans'
    },
    {
      title: 'Monthly Churn Rate',
      value: '3.2%',
      change: '+0.4%',
      icon: AlertCircle,
      description: 'Slightly above target of 3%'
    },
    {
      title: 'Conversion Rate',
      value: '69.6%',
      change: '+2.1%',
      icon: TrendingUp,
      description: 'Trial to paid conversion'
    },
    {
      title: 'Net Revenue Retention',
      value: '108%',
      change: '+1.2%',
      icon: Users,
      description: 'Expansion revenue included'
    }
  ];

  const insights = [
    {
      type: 'opportunity',
      title: 'iOS Conversion Opportunity',
      description: 'iOS trial-to-paid conversion (72%) is 8% higher than Android (64%). Consider optimizing Android onboarding.',
      impact: 'Potential +$45K MRR'
    },
    {
      type: 'warning',
      title: 'Churn Rate Increase',
      description: 'Churn rate increased 0.4% this month. Family plan users showing highest churn at 4.1%.',
      impact: 'Monitor closely'
    },
    {
      type: 'success',
      title: 'Annual Plan Growth',
      description: 'Annual plan adoption up 15% this quarter. Strong indicator of customer confidence.',
      impact: '+$180K deferred revenue'
    }
  ];

  return (
    <div>
      <h1 className="page-title">Analytics & Forecasting</h1>

      {/* KPI Metrics */}
      <div className="metrics-grid">
        {kpiMetrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div key={index} className="card metric-card">
              <div className="metric-title">
                <Icon size={16} style={{ display: 'inline', marginRight: '0.5rem' }} />
                {metric.title}
              </div>
              <div className="metric-value">{metric.value}</div>
              <div className={`metric-change ${metric.change.startsWith('+') ? 'positive' : 'negative'}`}>
                {metric.change} from last month
              </div>
              <div style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '0.25rem' }}>
                {metric.description}
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
        {/* Revenue Forecast */}
        <div className="card">
          <div className="card-header">
            <div className="card-title">Revenue Forecast (Next 6 Months)</div>
          </div>
          <div className="card-content">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={forecastData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" stroke="#666" />
                <YAxis 
                  stroke="#666"
                  tickFormatter={(value) => `$${(value / 1000)}K`}
                />
                <Tooltip 
                  formatter={(value, name) => [
                    `$${value ? value.toLocaleString() : 'N/A'}`, 
                    name === 'actual' ? 'Actual Revenue' : 'Forecasted Revenue'
                  ]}
                  labelStyle={{ color: '#666' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="actual" 
                  stroke="#6366f1" 
                  strokeWidth={3}
                  dot={{ fill: '#6366f1', strokeWidth: 2, r: 4 }}
                  connectNulls={false}
                />
                <Line 
                  type="monotone" 
                  dataKey="forecast" 
                  stroke="#f59e0b" 
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  dot={{ fill: '#f59e0b', strokeWidth: 2, r: 3 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Conversion Funnel */}
        <div className="card">
          <div className="card-header">
            <div className="card-title">Conversion Funnel</div>
          </div>
          <div className="card-content">
            {conversionData.map((stage, index) => (
              <div key={index} style={{ marginBottom: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span style={{ fontWeight: '600' }}>{stage.name}</span>
                  <span style={{ fontWeight: 'bold', color: '#6366f1' }}>
                    {stage.value.toLocaleString()}
                  </span>
                </div>
                <div style={{ 
                  width: '100%', 
                  height: '20px', 
                  background: '#f3f4f6', 
                  borderRadius: '10px',
                  overflow: 'hidden'
                }}>
                  <div style={{ 
                    width: index === 0 ? '100%' : index === 1 ? '70%' : '95%', 
                    height: '100%', 
                    background: stage.color,
                    transition: 'width 0.3s ease'
                  }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
        {/* Churn Analysis */}
        <div className="card">
          <div className="card-header">
            <div className="card-title">Churn Rate Trend</div>
          </div>
          <div className="card-content">
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={churnData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" stroke="#666" />
                <YAxis 
                  stroke="#666"
                  tickFormatter={(value) => `${value}%`}
                />
                <Tooltip 
                  formatter={(value) => [`${value}%`, 'Churn Rate']}
                  labelStyle={{ color: '#666' }}
                />
                <Bar dataKey="rate" fill="#ef4444" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Customer Cohorts */}
        <div className="card">
          <div className="card-header">
            <div className="card-title">Cohort Retention Analysis</div>
          </div>
          <div className="card-content">
            <div style={{ overflowX: 'auto' }}>
              <table className="table" style={{ fontSize: '0.75rem' }}>
                <thead>
                  <tr>
                    <th>Cohort</th>
                    <th>M1</th>
                    <th>M2</th>
                    <th>M3</th>
                    <th>M4</th>
                    <th>M5</th>
                    <th>M6</th>
                  </tr>
                </thead>
                <tbody>
                  {cohortData.map((cohort, index) => (
                    <tr key={index}>
                      <td style={{ fontWeight: '600' }}>{cohort.cohort}</td>
                      <td>{cohort.month1}%</td>
                      <td>{cohort.month2 ? `${cohort.month2}%` : '-'}</td>
                      <td>{cohort.month3 ? `${cohort.month3}%` : '-'}</td>
                      <td>{cohort.month4 ? `${cohort.month4}%` : '-'}</td>
                      <td>{cohort.month5 ? `${cohort.month5}%` : '-'}</td>
                      <td>{cohort.month6 ? `${cohort.month6}%` : '-'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* AI Insights */}
      <div className="card">
        <div className="card-header">
          <div className="card-title">AI-Powered Insights</div>
        </div>
        <div className="card-content">
          <div style={{ display: 'grid', gap: '1rem' }}>
            {insights.map((insight, index) => (
              <div key={index} style={{ 
                padding: '1rem', 
                borderRadius: '8px',
                border: `1px solid ${
                  insight.type === 'opportunity' ? '#10b981' : 
                  insight.type === 'warning' ? '#f59e0b' : '#6366f1'
                }`,
                background: `${
                  insight.type === 'opportunity' ? 'rgba(16, 185, 129, 0.05)' : 
                  insight.type === 'warning' ? 'rgba(245, 158, 11, 0.05)' : 'rgba(99, 102, 241, 0.05)'
                }`
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.5rem' }}>
                  <h4 style={{ 
                    margin: 0, 
                    color: insight.type === 'opportunity' ? '#10b981' : 
                           insight.type === 'warning' ? '#f59e0b' : '#6366f1'
                  }}>
                    {insight.title}
                  </h4>
                  <span style={{ 
                    fontSize: '0.75rem', 
                    fontWeight: '600',
                    color: insight.type === 'opportunity' ? '#10b981' : 
                           insight.type === 'warning' ? '#f59e0b' : '#6366f1'
                  }}>
                    {insight.impact}
                  </span>
                </div>
                <p style={{ margin: 0, color: '#374151', fontSize: '0.875rem' }}>
                  {insight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;