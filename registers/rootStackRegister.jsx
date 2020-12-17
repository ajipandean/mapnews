import MainBottomTabsNavigation from '../navigations/MainBottomTabsNavigation';
import UpdateProfileScreen from '../screens/RootStack/UpdateProfileScreen';
import CreatePostScreen from '../screens/RootStack/CreatePostScreen';

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
  {
    name: 'create-post',
    component: CreatePostScreen,
    options: {
      title: 'Postingan baru',
      headerShown: true,
    },
  },
];
