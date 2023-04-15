import cl from './MyButton.module.scss';


const MyButton = ({ children, active, ...props }) => {

    const clazz = active ? cl.active : cl.myButton;

    return (
        <button {...props} className={clazz}>
            {children}
        </button>
    );
};

export default MyButton;