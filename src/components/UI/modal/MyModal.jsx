import cl from './MyModal.module.scss';


const MyModal = ({ children, isShowModal, ...props }) => {

    const clazz = isShowModal ? cl.active : cl.hidden;

    return (
        <div className={clazz} {...props}>
            {children}
        </div>
    );
};

export default MyModal;