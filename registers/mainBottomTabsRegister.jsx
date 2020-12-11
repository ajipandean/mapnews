import ExploreScreen from '../screens/MainBottomTabs/ExploreScreen';
import ProfileScreen from '../screens/MainBottomTabs/ProfileScreen';

export default [
  {
    name: 'explore',
    icon: {
      active: 'map-marker',
      inactive: 'map-marker-outline',
    },
    component: ExploreScreen,
    options: {
      title: 'Explore',
    },
  },
  {
    name: 'profile',
    icon: {
      active: 'account-circle',
      inactive: 'account-circle-outline',
    },
    component: ProfileScreen,
    options: {
      title: 'Profile',
    },
  },
];
