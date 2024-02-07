import React from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import { ACTIVE_ITEMS } from '../../constant/activeItem';

const DragnDropList = () => {
    const layout = {
        lg: [
            { i: 'a', x: 0, y: 0, w: 1, h: 1 },
            { i: 'b', x: 0, y: 0, w: 1, h: 1 },
            { i: 'c', x: 0, y: 0, w: 1, h: 1 },
            { i: 'd', x: 0, y: 0, w: 1, h: 1 },
            { i: 'e', x: 0, y: 0, w: 1, h: 1 },
            { i: 'f', x: 0, y: 0, w: 1, h: 1 },
            { i: 'g', x: 0, y: 0, w: 1, h: 1 },
            { i: 'h', x: 0, y: 0, w: 1, h: 1 },
            { i: 'i', x: 0, y: 0, w: 1, h: 1 },
        ],
        md: [
            { i: 'a', x: 0, y: 0, w: 1, h: 1 },
            { i: 'b', x: 0, y: 0, w: 1, h: 1 },
            { i: 'c', x: 0, y: 0, w: 1, h: 1 },
            { i: 'd', x: 0, y: 0, w: 1, h: 1 },
            { i: 'e', x: 0, y: 0, w: 1, h: 1 },
            { i: 'f', x: 0, y: 0, w: 1, h: 1 },
            { i: 'g', x: 0, y: 0, w: 1, h: 1 },
            { i: 'h', x: 0, y: 0, w: 1, h: 1 },
            { i: 'i', x: 0, y: 0, w: 1, h: 1 },
        ],
        sm: [
            { i: 'a', x: 0, y: 0, w: 1, h: 1 },
            { i: 'b', x: 0, y: 0, w: 1, h: 1 },
            { i: 'c', x: 0, y: 0, w: 1, h: 1 },
            { i: 'd', x: 0, y: 0, w: 1, h: 1 },
            { i: 'e', x: 0, y: 0, w: 1, h: 1 },
            { i: 'f', x: 0, y: 0, w: 1, h: 1 },
            { i: 'g', x: 0, y: 0, w: 1, h: 1 },
            { i: 'h', x: 0, y: 0, w: 1, h: 1 },
            { i: 'i', x: 0, y: 0, w: 1, h: 1 },
        ],
    };

    const ResponsiveGridLayout = WidthProvider(Responsive);
    return (
        <dl>
            <dt className="text-xs">Active Item</dt>
            <ResponsiveGridLayout
                layouts={layout}
                cols={{ lg: 1, md: 1, sm: 1 }}
                breakpoints={{ lg: 1200, md: 996, sm: 768 }}
                rowHeight={30}
                isDraggable={true}
                isResizable={false}
                className="w-full h-full"
            >
                {ACTIVE_ITEMS.items.map((item, index) => (
                    <dd
                        className={`${
                            item.active === true ? 'border border-sky-300 bg-sky-50 rounded-3xl ' : ''
                        } pl-2 my-1 h-8 text-xs flex items-center cursor-pointer`}
                        key={index}
                    >
                        <div className="translate-y-0.5 inline-block text-xs">{item.icon}</div>
                        {item.i}
                    </dd>
                ))}
            </ResponsiveGridLayout>
        </dl>
    );
};

export default DragnDropList;
