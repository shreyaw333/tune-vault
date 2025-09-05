import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Music, DollarSign, Play, TrendingUp } from 'lucide-react';

const Artists = () => {
  const topArtists = [
    {
      id: 1,
      name: 'Luna Rodriguez',
      genre: 'Pop',
      streams: 12450000,
      royalties: 45230,
      growth: 15.4,
      avatar: '🎤'
    },
    {
      id: 2,
      name: 'The Midnight Echo',
      genre: 'Rock',
      streams: 8750000,
      royalties: 32180,
      growth: 8.7,
      avatar: '🎸'
    },
    {
      id: 3,
      name: 'DJ Synthwave',
      genre: 'Electronic',
      streams: 6900000,
      royalties: 28940,
      growth: 22.1,
      avatar: '🎧'
    },
    {
      id: 4,
      name: 'Acoustic Soul',
      genre: 'Folk',
      streams: 5200000,
      royalties: 19850,
      growth: -3.2,
      avatar: '🪕'
    },
    {
      id: 5,
      name: 'Urban Beats',
      genre: 'Hip-Hop',
      streams: 4800000,
      royalties: 22100,
      growth: 12.8,
      avatar: '🎵'
    }
  ];

  const royaltyData = [
    { month: 'Apr', amount: 380000 },
    { month: 'May', amount: 395000 },
    { month: 'Jun', amount: 412000 },
    { month: 'Jul', amount: 398000 },
    { month: 'Aug', amount: 435000 },
    { month: 'Sep', amount: 423000 }
  ];

  const stats = [
    { 
      title: 'Total Artists', 
      value: '2,847', 
      change: '+124 this month',
      icon: Music,
      positive: true 
    },
    { 
      title: 'Monthly Royalties', 
      value: '$423,156', 
      change: '+8.2% from last month',
      icon: DollarSign,
      positive: true 
    },
    { 
      title: 'Total Streams', 
      value: '156.7M', 
      change: '+12.4% from last month',
      icon: Play,
      positive: true 
    },
    { 
      title: 'Avg Revenue per Stream', 
      value: '$0.0034', 
      change: '+2.1% from last month',
      icon: TrendingUp,
      positive: true 
    }
  ];

  return (
    <div>
      <h1 className="page-title">Artists & Royalties</h1>

      {/* Stats Cards */}
      <div className="metrics-grid">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="card metric-card">
              <div className="metric-title">
                <Icon size={16} style={{ display: 'inline', marginRight: '0.5rem' }} />
                {stat.title}
              </div>
              <div className="metric-value">{stat.value}</div>
              <div className={`metric-change ${stat.positive ? 'positive' : 'negative'}`}>
                {stat.change}
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
        {/* Royalty Payments Chart */}
        <div className="card">
          <div className="card-header">
            <div className="card-title">Monthly Royalty Payments</div>
          </div>
          <div className="card-content">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={royaltyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" stroke="#666" />
                <YAxis 
                  stroke="#666"
                  tickFormatter={(value) => `$${(value / 1000)}K`}
                />
                <Tooltip 
                  formatter={(value) => [`$${value.toLocaleString()}`, 'Royalties']}
                  labelStyle={{ color: '#666' }}
                />
                <Bar dataKey="amount" fill="#6366f1" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Payments */}
        <div className="card">
          <div className="card-header">
            <div className="card-title">Recent Royalty Payments</div>
          </div>
          <div className="card-content">
            <div className="activity-item">
              <div>
                <div className="activity-description">Luna Rodriguez - Pop Hits Album</div>
                <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>12.4M streams</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontWeight: 'bold', color: '#6366f1' }}>$45,230</div>
                <div className="activity-time">Paid today</div>
              </div>
            </div>
            <div className="activity-item">
              <div>
                <div className="activity-description">The Midnight Echo - Rock Collection</div>
                <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>8.7M streams</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontWeight: 'bold', color: '#6366f1' }}>$32,180</div>
                <div className="activity-time">Paid today</div>
              </div>
            </div>
            <div className="activity-item">
              <div>
                <div className="activity-description">DJ Synthwave - Electronic Vibes</div>
                <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>6.9M streams</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontWeight: 'bold', color: '#6366f1' }}>$28,940</div>
                <div className="activity-time">Paid today</div>
              </div>
            </div>
            <button className="button" style={{ marginTop: '1rem', width: '100%' }}>
              View All Payments
            </button>
          </div>
        </div>
      </div>

      {/* Top Performing Artists */}
      <div className="card">
        <div className="card-header">
          <div className="card-title">Top Performing Artists</div>
        </div>
        <div className="card-content">
          <div style={{ overflowX: 'auto' }}>
            <table className="table">
              <thead>
                <tr>
                  <th>Artist</th>
                  <th>Genre</th>
                  <th>Total Streams</th>
                  <th>Monthly Royalties</th>
                  <th>Growth Rate</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {topArtists.map((artist) => (
                  <tr key={artist.id}>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <span style={{ fontSize: '1.5rem' }}>{artist.avatar}</span>
                        <div>
                          <div style={{ fontWeight: '600' }}>{artist.name}</div>
                          <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>Artist ID: #{artist.id.toString().padStart(4, '0')}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className="status active" style={{ background: 'rgba(99, 102, 241, 0.1)', color: '#6366f1' }}>
                        {artist.genre}
                      </span>
                    </td>
                    <td style={{ fontWeight: '600' }}>
                      {(artist.streams / 1000000).toFixed(1)}M
                    </td>
                    <td style={{ fontWeight: 'bold', color: '#6366f1' }}>
                      ${artist.royalties.toLocaleString()}
                    </td>
                    <td>
                      <span className={`metric-change ${artist.growth > 0 ? 'positive' : 'negative'}`}>
                        {artist.growth > 0 ? '+' : ''}{artist.growth}%
                      </span>
                    </td>
                    <td>
                      <button 
                        className="button secondary" 
                        style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}
                      >
                        View Details
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

export default Artists;