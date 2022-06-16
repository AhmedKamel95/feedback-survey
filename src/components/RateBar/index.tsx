import { Fragment, useContext, useState, useMemo, memo } from 'react'
import {
  DispatchShareFeedbackContext,
  ShareFeedbackContext,
} from 'context/ShareFeedbackProvider'
import styles from './rateBar.module.css'

const RateBar = ({ givenRate }: { givenRate?: number }) => {
  const ratings: number[] = useMemo(
    () => [...Array(10 + 1).keys()].slice(1).reverse(),
    [],
  )

  const [checkedValue, setCheckedValue] = useState<number | undefined>(
    givenRate,
  )
  const feedbackDispatch = useContext(DispatchShareFeedbackContext)
  const { questionAnswer } = useContext(ShareFeedbackContext)
  //Going back to previous, setCheckedValue state is still persisted,
  //thus it was needed to add another condition to properly get the checked value
  const checked: number | undefined = useMemo(
    () => (questionAnswer && checkedValue) || givenRate,
    [questionAnswer, checkedValue, givenRate],
  )

  const handleChange = (value: number) => () => {
    if (!givenRate) {
      setCheckedValue(value)
      feedbackDispatch({
        action: 'setAnswer',
        payload: value,
      })
    }
  }

  return (
    <div className={styles.rating}>
      {ratings.map((rate) => (
        <Fragment key={rate}>
          <input
            type="radio"
            value={rate}
            checked={rate === checked}
            readOnly
          />
          <span onClick={handleChange(rate)}>{rate}</span>
        </Fragment>
      ))}
    </div>
  )
}

export default memo(RateBar)
