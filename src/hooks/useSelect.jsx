import { useState } from 'react';

const useSelect = () => {
    const [selected, setSelected] = useState(false);

    const selectHandler = (event) => {
        setSelected(!selected);
    };
    return { selected, setSelected, selectHandler };
};

export default useSelect;
