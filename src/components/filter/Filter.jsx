import MyButton from '../UI/button/MyButton';

import cl from './Filter.module.scss';


const Filter = ({ onSelectFilter, filter }) => {

    const buttonsData = [
        { name: 'active', label: 'Active' },
        { name: 'completed', label: 'Completed' },
        { name: 'all', label: 'All' }
    ];

    return (
        <div className={cl.container}>
            {buttonsData.map(button => {
                const active = filter === button.name;
                return <MyButton
                    key={button.name}
                    onClick={() => onSelectFilter(button.name)}
                    active={active}
                >{button.label}</MyButton>
            })}
        </div>
    );
};

export default Filter;