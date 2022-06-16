import { useState, useContext, useMemo } from 'react'
import {
  DispatchShareFeedbackContext,
  ShareFeedbackContext,
} from 'context/ShareFeedbackProvider'
import styles from './mcq.module.css'
import { Option } from 'context/QuestionProvider'
import { isArrayHasData } from 'utils'

const MCQ = ({ options }: { options?: Option[] }) => {
  const [checkedValue, setCheckedValue] = useState<number | string | null>(null)
  const feedbackDispatch = useContext(DispatchShareFeedbackContext)
  const { questionAnswer } = useContext(ShareFeedbackContext)

  //Going back to previous, setCheckedValue state is still persisted,
  //thus it was needed to add another condition to properly get the checked value
  const checked = useMemo(
    () => questionAnswer && checkedValue,
    [questionAnswer, checkedValue],
  )

  const handleChange = (value: number | string) => () => {
    setCheckedValue(value)
    feedbackDispatch({
      action: 'setAnswer',
      payload: value,
    })
  }

  return (
    <div className={styles.optionsContainer}>
      {isArrayHasData(options) &&
        options?.map(({ value, label }) => (
          <div key={value} className={styles.list}>
            <input
              type="radio"
              className={styles.radio}
              value={value}
              checked={value === checked}
              readOnly
            />
            <span className={styles.label} onClick={handleChange(value)}>
              {label}
            </span>
          </div>
        ))}
    </div>
  )
}

export default MCQ
