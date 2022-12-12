import PropTypes from 'prop-types';
import css from './FeedBackOptions.module.css';

export default function FeedbackOptions({options, onLeaveFeedback}) {
    return (
        <div>
            {options.map((option) => {
                return (
                    <button type='button' className={css.button} key={option} onClick={() => {onLeaveFeedback(option)}}>{option}</button>
                )
            })}
        </div>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired,),
    onLeaveFeedback: PropTypes.func.isRequired,
}