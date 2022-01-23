import MainBottomTabsNavigation from '../navigations/MainBottomTabsNavigation';
import UpdateProfileScreen from '../screens/RootStack/UpdateProfileScreen';
import CreatePostScreen from '../screens/RootStack/CreatePostScreen';
import PostDetailScreen from '../screens/RootStack/PostDetailScreen';
import UpdatePostScreen from '../screens/RootStack/UpdatePostScreen';

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
  {
    name: 'post-detail',
    component: PostDetailScreen,
    options: { headerShown: true, title: null },
  },
  {
    name: 'update-post',
    component: UpdatePostScreen,
    options: {
      title: 'Ubah postingan',
      headerShown: true,
    },
  },
];
