import {
    Analytics,
    ArrowRight,
    ChatBubble,
    Dashboard,
    Dataset,
    Folder,
    PunchClock,
    Share,
    Star,
} from '@mui/icons-material';
import { Divider } from '@mui/material';

export const NAV_MENU_TOP = [
    { icon: <Star />, label: 'Favorite' },
    { icon: <PunchClock />, label: 'Recent' },
    { icon: <Folder />, label: 'My Folders' },
    { icon: <Share />, label: 'Shared Folders' },
];
export const NAV_MENU_BOTTOM = [
    { icon: <Dashboard />, label: 'Dashboards' },
    { icon: <Analytics />, label: 'Analysis' },
    { icon: <Dataset />, label: 'Datasets' },
    { icon: <ChatBubble />, label: 'Community' },
];
