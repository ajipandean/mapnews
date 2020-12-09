import ExploreScreen from '../screens/MainBottomTabs/ExploreScreen';
import CreatePostScreen from '../screens/MainBottomTabs/CreatePostScreen';
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
    name: 'create-post',
    icon: {
      active: 'plus-circle',
      inactive: 'plus-circle-outline',
    },
    component: CreatePostScreen,
    options: {
      title: 'Create',
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
