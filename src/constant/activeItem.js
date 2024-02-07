import { Bolt, EventAvailable } from '@mui/icons-material';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

export const ACTIVE_ITEMS = {
    items: [
        { i: 'Date', icon: <Bolt />, active: true, x: 0, y: 0, w: 1, h: 1 },
        { i: 'Forcasted Monthly Revenue', icon: <BookmarkBorderIcon />, active: true, x: 0, y: 9, w: 1, h: 1 },
        { i: 'Is Closed', icon: <BookmarkBorderIcon />, active: false, x: 0, y: 1, w: 1, h: 1 },
        { i: 'Is LAtest', icon: <Bolt />, active: true, x: 0, y: 2, w: 1, h: 1 },
        { i: 'Lead Name', icon: <BookmarkBorderIcon />, active: false, x: 0, y: 3, w: 1, h: 1 },
        { i: 'Opportunity', icon: <BookmarkBorderIcon />, active: false, x: 0, y: 4, w: 1, h: 1 },
        { i: 'Region', icon: <BookmarkBorderIcon />, active: false, x: 0, y: 5, w: 1, h: 1 },
        { i: 'Sales person', icon: <Bolt />, active: false, x: 0, y: 6, w: 1, h: 1 },
        { i: 'Segment', icon: <Bolt />, active: false, x: 0, y: 7, w: 1, h: 1 },
        { i: 'Target Close', icon: <EventAvailable />, active: true, x: 0, y: 8, w: 1, h: 1 },
    ],
};
