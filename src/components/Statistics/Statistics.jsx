import PropTypes from 'prop-types';
import css from '../App.module.css';
import { Notification } from '../Notification/Notification';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      {total === 0 ? (
        <Notification message="There is no feedback!" />
      ) : (
        <div className={css.statWrapper}>
          <p className={css.stats}>
            Good: <span className={css.span}> {good}</span>
          </p>
          <p className={css.stats}>
            Neutral: <span className={css.span}> {neutral}</span>
          </p>
          <p className={css.stats}>
            Bad: <span className={css.span}> {bad}</span>
          </p>
          <p className={css.stats}>
            Total: <span className={css.span}> {total}</span>
          </p>
          <p className={css.stats}>
            PositivePercentage:{' '}
            <span className={css.span}> {positivePercentage}%</span>
          </p>
        </div>
      )}
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
