import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, Eye, EyeOff, User, Lock, ArrowRight, Shield, Users, Briefcase, UserCheck, Crown, Clock, DollarSign } from 'lucide-react';

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedRole, setSelectedRole] = useState('');
  const navigate = useNavigate();

  // User credentials for different roles including HR department
  const users = {
    'superadmin': { password: 'super123', role: 'super-admin', email: 'superadmin@100acres.com', name: 'Super Administrator' },
    'headadmin': { password: 'head123', role: 'head-admin', email: 'headadmin@100acres.com', name: 'Head Administrator' },
    'teamleader': { password: 'tl123', role: 'team-leader', email: 'teamleader@100acres.com', name: 'Team Leader' },
    'employee': { password: 'emp123', role: 'employee', email: 'employee@100acres.com', name: 'Employee' },
    'hrmanager': { password: 'hr123', role: 'hr-manager', email: 'hrmanager@100acres.com', name: 'HR Manager' },
    'hrassistant': { password: 'hra123', role: 'hr-assistant', email: 'hrassistant@100acres.com', name: 'HR Assistant' },
    'payroll': { password: 'pay123', role: 'payroll-admin', email: 'payroll@100acres.com', name: 'Payroll Administrator' }
  };

  const roleCards = [
    {
      id: 'superadmin',
      title: 'Super Admin',
      description: 'Full system access and control',
      icon: Crown,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50 hover:bg-purple-100',
      borderColor: 'border-purple-200 hover:border-purple-300'
    },
    {
      id: 'headadmin',
      title: 'Head Admin',
      description: 'Department management',
      icon: Shield,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50 hover:bg-blue-100',
      borderColor: 'border-blue-200 hover:border-blue-300'
    },
    {
      id: 'teamleader',
      title: 'Team Leader',
      description: 'Team coordination and oversight',
      icon: Users,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50 hover:bg-green-100',
      borderColor: 'border-green-200 hover:border-green-300'
    },
    {
      id: 'employee',
      title: 'Employee',
      description: 'Daily operations and tasks',
      icon: User,
      color: 'from-gray-500 to-gray-600',
      bgColor: 'bg-gray-50 hover:bg-gray-100',
      borderColor: 'border-gray-200 hover:border-gray-300'
    },
    {
      id: 'hrmanager',
      title: 'HR Manager',
      description: 'Human resources management',
      icon: UserCheck,
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50 hover:bg-orange-100',
      borderColor: 'border-orange-200 hover:border-orange-300'
    },
    {
      id: 'hrassistant',
      title: 'HR Assistant',
      description: 'HR support and coordination',
      icon: Briefcase,
      color: 'from-teal-500 to-teal-600',
      bgColor: 'bg-teal-50 hover:bg-teal-100',
      borderColor: 'border-teal-200 hover:border-teal-300'
    },
    {
      id: 'payroll',
      title: 'Payroll Admin',
      description: 'Payroll and compensation',
      icon: DollarSign,
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'bg-emerald-50 hover:bg-emerald-100',
      borderColor: 'border-emerald-200 hover:border-emerald-300'
    }
  ];

  const handleRoleSelect = (roleId) => {
    setSelectedRole(roleId);
    setCredentials({
      username: roleId,
      password: users[roleId]?.password || ''
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const user = users[credentials.username.toLowerCase()];
      
      if (user && user.password === credentials.password) {
        // Store user session data
        localStorage.setItem('userRole', user.role);
        localStorage.setItem('userEmail', user.email);
        localStorage.setItem('userName', user.name);
        localStorage.setItem('isLoggedIn', 'true');
        
        // Redirect to dashboard
        navigate('/');
        
        // Reload to update the app state
        window.location.reload();
      } else {
        setError('Invalid username or password');
      }
    } catch (err) {
      setError('Login failed. Please try again.');
    }
    
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="relative w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* Left Side - Branding and Info */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <div className="flex items-center justify-center lg:justify-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl flex items-center justify-center shadow-xl">
                  <Building2 className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                    100acres.com
                  </h1>
                  <p className="text-slate-600 text-lg font-medium">CRM Dashboard</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <h2 className="text-3xl font-bold text-slate-800">Welcome Back!</h2>
                <p className="text-slate-600 text-lg">
                  Access your personalized dashboard and manage your real estate operations efficiently.
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Users className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-slate-800">Lead Management</p>
                  <p className="text-sm text-slate-600">Track and convert leads</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Clock className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-slate-800">Task Tracking</p>
                  <p className="text-sm text-slate-600">Organize your workflow</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div className="w-full max-w-md mx-auto">
            <Card className="bg-white/80 backdrop-blur-md border-white/20 shadow-2xl">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl font-bold text-slate-800">Sign In</CardTitle>
                <p className="text-slate-600">Choose your role to get started</p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Role Selection */}
                {!selectedRole && (
                  <div className="space-y-4">
                    <Label className="text-sm font-semibold text-slate-700">Select Your Role</Label>
                    <div className="grid grid-cols-1 gap-3 max-h-80 overflow-y-auto">
                      {roleCards.map((role) => {
                        const Icon = role.icon;
                        return (
                          <button
                            key={role.id}
                            onClick={() => handleRoleSelect(role.id)}
                            className={`p-4 rounded-xl border-2 transition-all duration-200 text-left ${role.bgColor} ${role.borderColor} hover:shadow-md group`}
                          >
                            <div className="flex items-center space-x-3">
                              <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${role.color} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-200`}>
                                <Icon className="h-5 w-5 text-white" />
                              </div>
                              <div className="flex-1">
                                <p className="font-semibold text-slate-800">{role.title}</p>
                                <p className="text-sm text-slate-600">{role.description}</p>
                              </div>
                              <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-slate-600 group-hover:translate-x-1 transition-all duration-200" />
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Login Form */}
                {selectedRole && (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Selected Role Display */}
                    <div className="p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border border-green-200">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${roleCards.find(r => r.id === selectedRole)?.color} flex items-center justify-center shadow-md`}>
                            {React.createElement(roleCards.find(r => r.id === selectedRole)?.icon, { className: "h-5 w-5 text-white" })}
                          </div>
                          <div>
                            <p className="font-semibold text-slate-800">{roleCards.find(r => r.id === selectedRole)?.title}</p>
                            <p className="text-sm text-slate-600">Ready to sign in</p>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedRole('');
                            setCredentials({ username: '', password: '' });
                            setError('');
                          }}
                          className="text-slate-500 hover:text-slate-700 transition-colors"
                        >
                          <ArrowRight className="h-4 w-4 rotate-180" />
                        </button>
                      </div>
                    </div>

                    {error && (
                      <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
                        <p className="text-sm text-red-600 flex items-center">
                          <Shield className="h-4 w-4 mr-2" />
                          {error}
                        </p>
                      </div>
                    )}
                    
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="username" className="text-sm font-semibold text-slate-700">Username</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                          <Input
                            id="username"
                            type="text"
                            placeholder="Enter username"
                            value={credentials.username}
                            onChange={(e) => setCredentials(prev => ({ ...prev, username: e.target.value }))}
                            required
                            className="pl-10 h-12 bg-white/80 border-slate-200 focus:ring-green-500 focus:border-green-500 rounded-xl"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="password" className="text-sm font-semibold text-slate-700">Password</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                          <Input
                            id="password"
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Enter password"
                            value={credentials.password}
                            onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
                            required
                            className="pl-10 pr-12 h-12 bg-white/80 border-slate-200 focus:ring-green-500 focus:border-green-500 rounded-xl"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                          >
                            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </button>
                        </div>
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full h-12 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02]" 
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Signing In...</span>
                        </div>
                      ) : (
                        <div className="flex items-center space-x-2">
                          <span>Sign In</span>
                          <ArrowRight className="h-4 w-4" />
                        </div>
                      )}
                    </Button>
                  </form>
                )}

                {/* Quick Access Info */}
                <div className="pt-4 border-t border-slate-200">
                  <p className="text-xs text-slate-500 text-center mb-3">
                    Demo credentials are auto-filled when you select a role
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="text-center p-2 bg-slate-50 rounded-lg">
                      <p className="font-medium text-slate-700">Quick Demo</p>
                      <p className="text-slate-500">Select any role above</p>
                    </div>
                    <div className="text-center p-2 bg-slate-50 rounded-lg">
                      <p className="font-medium text-slate-700">Secure Access</p>
                      <p className="text-slate-500">Role-based permissions</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;