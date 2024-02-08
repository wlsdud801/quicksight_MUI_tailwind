import { Analytics, ChatBubble, Dashboard, Dataset, Folder, PunchClock, Share, Star } from '@mui/icons-material';

export const NAV_MENU_TOP = [
    { icon: <Star />, label: 'Favorite', link: '' },
    { icon: <PunchClock />, label: 'Recent', link: 'Recent' },
    { icon: <Folder />, label: 'My folders', link: 'Myfolders' },
    { icon: <Share />, label: 'Shared folders', link: 'Sharedfolders' },
];
export const NAV_MENU_BOTTOM = [
    { icon: <Dashboard />, label: 'Dashboards', link: 'Dashboards' },
    { icon: <Analytics />, label: 'Analysis', link: 'Analysis' },
    { icon: <Dataset />, label: 'Datasets', link: 'Datasets' },
    { icon: <ChatBubble />, label: 'Community', link: 'Community' },
];
