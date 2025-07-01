import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { User, Mail, Phone, Calendar, Shield, UserPlus, Building2, Users, Ticket, Crown, Sparkles, TrendingUp, Settings, BarChart3, Database, Globe, Lock, Activity, Zap, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SuperAdminProfile = ({ onCreateAdmin }) => {
  const navigate = useNavigate();

  const superAdminData = {
    name: localStorage.getItem('userName') || 'Super Administrator',
    email: localStorage.getItem('userEmail') || 'superadmin@100acres.com',
    phone: '+91 9876543210',
    role: 'Super Admin',
    company: '100acres.com',
    joinDate: '2024-01-01',
    permissions: [
      'Full System Access',
      'Create Head Admins',
      'Manage All Users',
      'View All Reports',
      'System Configuration',
      'Access All Data'
    ]
  };

  const statsData = [
    { title: 'Total Users', value: '147', icon: Users, color: 'from-blue-500 to-blue-600', bg: 'bg-blue-50', change: '+12%' },
    { title: 'Active Leads', value: '1,234', icon: Building2, color: 'from-green-500 to-green-600', bg: 'bg-green-50', change: '+8%' },
    { title: 'Open Tickets', value: '89', icon: Ticket, color: 'from-orange-500 to-orange-600', bg: 'bg-orange-50', change: '-5%' },
    { title: 'System Health', value: '99.9%', icon: Shield, color: 'from-emerald-500 to-emerald-600', bg: 'bg-emerald-50', change: '+0.1%' },
    { title: 'Monthly Revenue', value: '₹45.2L', icon: TrendingUp, color: 'from-purple-500 to-purple-600', bg: 'bg-purple-50', change: '+18%' },
    { title: 'Data Storage', value: '2.4TB', icon: Database, color: 'from-indigo-500 to-indigo-600', bg: 'bg-indigo-50', change: '+15%' }
  ];

  const quickActions = [
    {
      title: 'Create Head Admin',
      description: 'Add new head administrator to the system',
      icon: Crown,
      color: 'from-yellow-500 to-yellow-600',
      bg: 'bg-yellow-50',
      action: () => navigate('/create-admin'),
      primary: true
    },
    {
      title: 'Manage Users',
      description: 'View and manage all system users',
      icon: Users,
      color: 'from-blue-500 to-blue-600',
      bg: 'bg-blue-50',
      action: () => navigate('/users')
    },
    {
      title: 'View All Leads',
      description: 'Access complete leads database',
      icon: Building2,
      color: 'from-green-500 to-green-600',
      bg: 'bg-green-50',
      action: () => navigate('/leads')
    },
    {
      title: 'Support Tickets',
      description: 'Monitor and resolve system tickets',
      icon: Ticket,
      color: 'from-orange-500 to-orange-600',
      bg: 'bg-orange-50',
      action: () => navigate('/tickets')
    },
    {
      title: 'System Settings',
      description: 'Configure system-wide settings',
      icon: Settings,
      color: 'from-gray-500 to-gray-600',
      bg: 'bg-gray-50',
      action: () => navigate('/settings')
    },
    {
      title: 'Analytics Dashboard',
      description: 'View detailed system analytics',
      icon: BarChart3,
      color: 'from-purple-500 to-purple-600',
      bg: 'bg-purple-50',
      action: () => navigate('/analytics')
    }
  ];

  const systemStatus = [
    { name: 'API Services', status: 'Operational', color: 'text-green-600', bg: 'bg-green-100' },
    { name: 'Database', status: 'Operational', color: 'text-green-600', bg: 'bg-green-100' },
    { name: 'Email Service', status: 'Operational', color: 'text-green-600', bg: 'bg-green-100' },
    { name: 'File Storage', status: 'Warning', color: 'text-yellow-600', bg: 'bg-yellow-100' },
    { name: 'Backup System', status: 'Operational', color: 'text-green-600', bg: 'bg-green-100' }
  ];

  const recentActivities = [
    { action: 'New user registration', user: 'John Doe', time: '2 minutes ago', type: 'user' },
    { action: 'Lead converted to client', user: 'Sarah Khan', time: '15 minutes ago', type: 'lead' },
    { action: 'System backup completed', user: 'System', time: '1 hour ago', type: 'system' },
    { action: 'New ticket created', user: 'Mike Johnson', time: '2 hours ago', type: 'ticket' },
    { action: 'User role updated', user: 'Admin', time: '3 hours ago', type: 'user' }
  ];

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <Card className="lg:col-span-2 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 border-slate-200/60 shadow-lg">
          <CardHeader className="pb-4">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 via-green-700 to-green-800 rounded-2xl flex items-center justify-center shadow-xl">
                  <Building2 className="h-8 w-8 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-md">
                  <Crown className="h-3 w-3 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 bg-clip-text text-transparent">
                  {superAdminData.name}
                </h1>
                <div className="flex items-center space-x-2 mt-1">
                  <Badge className="bg-gradient-to-r from-green-500 to-green-600 text-white text-xs font-semibold shadow-md">
                    {superAdminData.role}
                  </Badge>
                  <div className="flex items-center">
                    <Sparkles className="h-4 w-4 text-yellow-500 mr-1" />
                    <span className="text-sm text-slate-600 font-medium">Premium Access</span>
                  </div>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 p-3 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20">
                <Building2 className="h-4 w-4 text-slate-500" />
                <div>
                  <p className="text-sm font-medium text-slate-900">{superAdminData.company}</p>
                  <p className="text-xs text-slate-600">Organization</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20">
                <Mail className="h-4 w-4 text-slate-500" />
                <div>
                  <p className="text-sm font-medium text-slate-900">{superAdminData.email}</p>
                  <p className="text-xs text-slate-600">Email Address</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* System Status Card */}
        <Card className="bg-white/80 backdrop-blur-md border-slate-200/60 shadow-lg">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center text-lg">
              <Activity className="h-5 w-5 mr-2 text-green-600" />
              System Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {systemStatus.map((service, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-700">{service.name}</span>
                  <Badge className={`${service.bg} ${service.color} text-xs`}>
                    {service.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {statsData.map((stat, index) => (
          <Card key={index} className="bg-white/80 backdrop-blur-md hover:shadow-xl transition-all duration-300 hover:scale-105 border-slate-200/60 shadow-lg group">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-sm font-semibold text-slate-600 mb-2">{stat.title}</p>
                  <p className="text-3xl font-bold text-slate-900 mb-3">{stat.value}</p>
                  <div className="flex items-center">
                    <TrendingUp className="h-3 w-3 text-green-600 mr-1" />
                    <span className={`text-xs font-semibold ${
                      stat.change.startsWith('+') ? 'text-green-600' : 
                      stat.change.startsWith('-') ? 'text-red-600' : 'text-gray-600'
                    }`}>
                      {stat.change} this month
                    </span>
                  </div>
                </div>
                <div className={`p-4 rounded-2xl bg-gradient-to-r ${stat.color} shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                  <stat.icon className="h-7 w-7 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions Grid */}
      <div>
        <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center">
          <Zap className="h-5 w-5 mr-2 text-yellow-500" />
          Quick Actions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickActions.map((action, index) => (
            <Card 
              key={index} 
              className={`bg-white/80 backdrop-blur-md border-slate-200/60 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group ${
                action.primary ? 'ring-2 ring-yellow-400 ring-opacity-50' : ''
              }`}
              onClick={action.action}
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${action.color} shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                    <action.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-900 mb-2 group-hover:text-slate-700 transition-colors">
                      {action.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {action.description}
                    </p>
                  </div>
                </div>
                {action.primary && (
                  <div className="mt-4 flex items-center text-yellow-600">
                    <Target className="h-4 w-4 mr-1" />
                    <span className="text-xs font-medium">Primary Action</span>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <Card className="bg-white/80 backdrop-blur-md border-slate-200/60 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center text-lg">
              <Activity className="h-5 w-5 mr-2 text-blue-600" />
              Recent Activities
            </CardTitle>
            <CardDescription>Latest system activities and user actions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                  <div className={`w-2 h-2 rounded-full ${
                    activity.type === 'user' ? 'bg-blue-500' :
                    activity.type === 'lead' ? 'bg-green-500' :
                    activity.type === 'system' ? 'bg-purple-500' : 'bg-orange-500'
                  }`}></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-slate-900">{activity.action}</p>
                    <p className="text-xs text-slate-600">{activity.user} • {activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Permissions Card */}
        <Card className="bg-white/80 backdrop-blur-md border-slate-200/60 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center text-lg">
              <Shield className="h-5 w-5 mr-2 text-green-600" />
              System Permissions
            </CardTitle>
            <CardDescription>Your administrative access levels</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {superAdminData.permissions.map((permission, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border border-green-200/50 transition-all duration-200 hover:shadow-sm">
                  <Shield className="h-4 w-4 text-green-600 flex-shrink-0" />
                  <span className="text-sm font-medium text-green-800">{permission}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SuperAdminProfile;