import React, { useState } from 'react';
import { Save, Key, Globe, DollarSign, Bell, Shield, Download, Upload } from 'lucide-react';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('general');
  
  const tabs = [
    { id: 'general', label: 'General', icon: Globe },
    { id: 'payment', label: 'Payment APIs', icon: DollarSign },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'data', label: 'Data & Export', icon: Download }
  ];

  const GeneralSettings = () => (
    <div className="card">
      <div className="card-header">
        <div className="card-title">General Configuration</div>
      </div>
      <div className="card-content">
        <div style={{ display: 'grid', gap: '1.5rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
              Company Name
            </label>
            <input
              type="text"
              defaultValue="TuneVault Music Streaming"
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #d1d5db',
                borderRadius: '8px'
              }}
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
              Default Currency
            </label>
            <select style={{
              width: '100%',
              padding: '0.75rem',
              border: '1px solid #d1d5db',
              borderRadius: '8px'
            }}>
              <option value="USD">USD - US Dollar</option>
              <option value="EUR">EUR - Euro</option>
              <option value="GBP">GBP - British Pound</option>
            </select>
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
              Revenue Recognition Standard
            </label>
            <select style={{
              width: '100%',
              padding: '0.75rem',
              border: '1px solid #d1d5db',
              borderRadius: '8px'
            }}>
              <option value="ASC606">ASC 606 (US GAAP)</option>
              <option value="IFRS15">IFRS 15 (International)</option>
            </select>
          </div>
          <div>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <input type="checkbox" defaultChecked />
              <span>Enable automated revenue recognition</span>
            </label>
          </div>
          <div>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <input type="checkbox" defaultChecked />
              <span>Generate monthly compliance reports</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );

  const PaymentSettings = () => (
    <div className="card">
      <div className="card-header">
        <div className="card-title">Payment Gateway Configuration</div>
      </div>
      <div className="card-content">
        <div style={{ display: 'grid', gap: '2rem' }}>
          {/* Stripe */}
          <div>
            <h4 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              🌐 Stripe Configuration
              <span className="status active">Connected</span>
            </h4>
            <div style={{ display: 'grid', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                  Publishable Key
                </label>
                <input
                  type="text"
                  defaultValue="pk_live_••••••••••••••••••••••••••••••••"
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '8px'
                  }}
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                  Webhook Endpoint
                </label>
                <input
                  type="text"
                  defaultValue="https://api.tunevault.com/webhooks/stripe"
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '8px'
                  }}
                />
              </div>
            </div>
          </div>

          {/* Apple */}
          <div>
            <h4 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              📱 Apple App Store Configuration
              <span className="status active">Connected</span>
            </h4>
            <div style={{ display: 'grid', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                  App Store Connect Key ID
                </label>
                <input
                  type="text"
                  defaultValue="••••••••••"
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '8px'
                  }}
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                  Bundle ID
                </label>
                <input
                  type="text"
                  defaultValue="com.tunevault.musicapp"
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '8px'
                  }}
                />
              </div>
            </div>
          </div>

          {/* Google */}
          <div>
            <h4 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              🤖 Google Play Configuration
              <span className="status active">Connected</span>
            </h4>
            <div style={{ display: 'grid', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                  Package Name
                </label>
                <input
                  type="text"
                  defaultValue="com.tunevault.android"
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '8px'
                  }}
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                  Service Account Email
                </label>
                <input
                  type="text"
                  defaultValue="tunevault@••••••••••••••••••••••••••••.iam.gserviceaccount.com"
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '8px'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const NotificationSettings = () => (
    <div className="card">
      <div className="card-header">
        <div className="card-title">Notification Preferences</div>
      </div>
      <div className="card-content">
        <div style={{ display: 'grid', gap: '1.5rem' }}>
          <div>
            <h4 style={{ marginBottom: '1rem' }}>Revenue Alerts</h4>
            <div style={{ display: 'grid', gap: '0.5rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <input type="checkbox" defaultChecked />
                <span>Daily revenue summary</span>
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <input type="checkbox" defaultChecked />
                <span>Weekly MRR reports</span>
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <input type="checkbox" defaultChecked />
                <span>Failed payment notifications</span>
              </label>
            </div>
          </div>

          <div>
            <h4 style={{ marginBottom: '1rem' }}>System Alerts</h4>
            <div style={{ display: 'grid', gap: '0.5rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <input type="checkbox" defaultChecked />
                <span>API integration errors</span>
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <input type="checkbox" />
                <span>High churn rate warnings</span>
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <input type="checkbox" defaultChecked />
                <span>Monthly compliance report completion</span>
              </label>
            </div>
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
              Notification Email
            </label>
            <input
              type="email"
              defaultValue="admin@tunevault.com"
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #d1d5db',
                borderRadius: '8px'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );

  const DataSettings = () => (
    <div className="card">
      <div className="card-header">
        <div className="card-title">Data Management & Export</div>
      </div>
      <div className="card-content">
        <div style={{ display: 'grid', gap: '2rem' }}>
          <div>
            <h4 style={{ marginBottom: '1rem' }}>Export Options</h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
              <button className="button secondary">
                <Download size={18} />
                Export Revenue Data
              </button>
              <button className="button secondary">
                <Download size={18} />
                Export Subscriptions
              </button>
              <button className="button secondary">
                <Download size={18} />
                Export Artist Royalties
              </button>
              <button className="button secondary">
                <Download size={18} />
                Export All Data
              </button>
            </div>
          </div>

          <div>
            <h4 style={{ marginBottom: '1rem' }}>Data Retention</h4>
            <div style={{ display: 'grid', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                  Transaction Data Retention (months)
                </label>
                <select style={{
                  width: '200px',
                  padding: '0.75rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '8px'
                }}>
                  <option value="12">12 months</option>
                  <option value="24">24 months</option>
                  <option value="36" selected>36 months</option>
                  <option value="60">60 months</option>
                </select>
              </div>
              <div>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <input type="checkbox" defaultChecked />
                  <span>Enable automatic data archiving</span>
                </label>
              </div>
            </div>
          </div>

          <div>
            <h4 style={{ marginBottom: '1rem' }}>Backup & Recovery</h4>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <span>Last backup:</span>
              <span style={{ fontWeight: '600' }}>September 5, 2025 - 03:00 AM</span>
              <button className="button secondary">
                <Upload size={18} />
                Create Backup Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'general':
        return <GeneralSettings />;
      case 'payment':
        return <PaymentSettings />;
      case 'notifications':
        return <NotificationSettings />;
      case 'data':
        return <DataSettings />;
      default:
        return <GeneralSettings />;
    }
  };

  return (
    <div>
      <h1 className="page-title">Settings & Configuration</h1>

      {/* Tab Navigation */}
      <div className="card" style={{ marginBottom: '2rem' }}>
        <div className="card-content" style={{ padding: '0' }}>
          <div style={{ display: 'flex', borderBottom: '1px solid #f3f4f6' }}>
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    padding: '1rem 1.5rem',
                    border: 'none',
                    background: activeTab === tab.id ? '#6366f1' : 'transparent',
                    color: activeTab === tab.id ? 'white' : '#374151',
                    borderBottom: activeTab === tab.id ? '2px solid #6366f1' : '2px solid transparent',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontWeight: '500',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <Icon size={18} />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      {renderTabContent()}

      {/* Save Button */}
      <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
        <button className="button secondary">
          Cancel
        </button>
        <button className="button">
          <Save size={18} />
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Settings;