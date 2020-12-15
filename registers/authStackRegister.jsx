import LoginScreen from '../screens/AuthStack/LoginScreen';
import RegisterScreen from '../screens/AuthStack/RegisterScreen';
import UpdateProfileScreen from '../screens/AuthStack/UpdateProfileScreen';

export default [
  {
    name: 'login',
    component: LoginScreen,
    options: {},
  },
  {
    name: 'register',
    component: RegisterScreen,
    options: {},
  },
  {
    name: 'update-profile',
    component: UpdateProfileScreen,
    options: {},
  },
];
