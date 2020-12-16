import MainBottomTabsNavigation from '../navigations/MainBottomTabsNavigation';
import UpdateProfileScreen from '../screens/RootStack/UpdateProfileScreen';

export default [
  {
    name: 'main-bottom-tabs',
    component: MainBottomTabsNavigation,
    options: {},
  },
  {
    name: 'update-profile',
    component: UpdateProfileScreen,
    options: {
      title: 'Ubah profil',
      headerShown: true,
    },
  },
];
