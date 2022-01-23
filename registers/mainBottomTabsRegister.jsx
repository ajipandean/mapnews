import ExploreScreen from '../screens/MainBottomTabs/ExploreScreen';
import ProfileScreen from '../screens/MainBottomTabs/ProfileScreen';

export default [
  {
    name: 'explore',
    component: ExploreScreen,
    icon: {
      active: 'map',
      inactive: 'map-outline',
    },
    options: {
      title: 'Jelajah',
    },
  },
  {
    name: 'profile',
    component: ProfileScreen,
    icon: {
      active: 'account-circle',
      inactive: 'account-circle-outline',
    },
    options: {
      title: 'Profil',
    },
  },
];
