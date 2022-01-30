
import css from './Message.module.css';

const Message = (props) => {
    return ( 
        <div 
            className={ css.body }>
            <div 
                className={ css.message }>
                { props.message }
            </div>
        </div> 
    );
}

export { Message }; 