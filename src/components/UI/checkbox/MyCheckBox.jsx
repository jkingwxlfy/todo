import cl from './MyCheckBox.module.scss';


const MyCheckBox = ({ ...props }) => {
    return (
        <label>
            <input
                type="checkbox"
                className={cl.real_checkbox}
                {...props}
            />
            <span className={cl.custom_checkbox}></span>
        </label>
    );
};

export default MyCheckBox;