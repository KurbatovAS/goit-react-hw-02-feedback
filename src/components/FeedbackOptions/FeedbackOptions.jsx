import PropTypes from 'prop-types';
import shortid from 'shortid';
import s from './FeedbackOptions.module.scss';

function FeedbackOptions({ options, onLeaveFeedback }) {    
    return (
        <div className={s.box}>
            {options.map(element => {
                return (
                    <button
                        key={shortid.generate()}
                        type="button"
                        onClick={onLeaveFeedback}
                        className={s.button}
                        name={element}
                >{element}            
                </button>
                )
            })}
        </div>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions;