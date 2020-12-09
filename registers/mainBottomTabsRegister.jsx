import ExploreScreen from '../screens/MainBottomTabs/ExploreScreen';

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
];
