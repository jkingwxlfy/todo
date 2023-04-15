import cl from './MyInput.module.scss';


const MyInput = ({ ...props }) => {
    return (
        <input
            {...props}
            type="text"
            className={cl.myInput}
            placeholder="What we need to do?"
        />
    );
};

export default MyInput;