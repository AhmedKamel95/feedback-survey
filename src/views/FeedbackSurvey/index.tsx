import { useState, useContext, SyntheticEvent } from 'react'
import { useLocation, useHistory } from 'react-router-dom'

import {
  ShareFeedbackContext,
  DispatchShareFeedbackContext,
} from 'context/ShareFeedbackProvider'
import { QuestionContext, QuestionT } from 'context/QuestionProvider'
import { UserContext, DispatchUserContext } from 'context/UserProvider'
import { MainLayout } from 'layouts'
import { User, Button, RateBar, MCQ } from 'components'
import { UserT } from 'context/types'
import { isArrayHasData } from 'utils'
import styles from './feedbackSurvey.module.css'

const FeedbackSurvey = () => {
  const { state: selectedMember } = useLocation<UserT>()
  const history = useHistory()

  const domainUsers = useContext(UserContext)
  const questions = useContext(QuestionContext)
  const userDispatch = useContext(DispatchUserContext)
  const { questionAnswer } = useContext(ShareFeedbackContext)
  const feedbackDispatch = useContext(DispatchShareFeedbackContext)

  const [questionIndex, setQuestionIndex] = useState<number>(0)

  const lastQuestion: boolean = questionIndex + 1 === questions?.length

  const handlePrevious = () => setQuestionIndex((prev) => prev - 1)

  const handleNext =
    ({
      question,
      isSkipped = false,
    }: {
      question: QuestionT
      isSkipped?: boolean
    }) =>
    () => {
      // Appending answer to our current user feedback array
      feedbackDispatch({
        action: 'appendAnswer',
        payload: {
          ...question,
          value: questionAnswer,
          skipped: isSkipped,
        },
      })
      // Setting answer to null in order to get the next one and disable Next till user chooses
      // answer only if the question is `required`
      feedbackDispatch({
        action: 'setAnswer',
        payload: null,
      })
      if (lastQuestion) {
        // Mutating the domain users array to list the members with submitted feedback
        // so you can see `View Submissions` in the `Share Feedback` tab
        userDispatch({
          action: 'set',
          payload: domainUsers?.map((user: any) =>
            user.id === selectedMember.id
              ? {
                  ...user,
                  isFeedbackSubmitted: true,
                }
              : user,
          ),
        })
        // Submitting feedback by appending the feedback Collection that gathers all submitted feedbacks
        feedbackDispatch({
          action: 'submitMemberFeedback',
          payload: selectedMember,
        })
        // Go back to the `Share Feedback` tab and displaying Thank you for your submission
        history.push({
          pathname: '/share-feedback',
          state: { submittedFeedback: true },
        })
      } else setQuestionIndex((prev) => prev + 1)
    }

  const handleTextChange = (event: SyntheticEvent) =>
    feedbackDispatch({
      action: 'setAnswer',
      payload: (event.target as HTMLInputElement).value,
    })

  return (
    <MainLayout loggedIn>
      <div className={styles.wrapper}>
        {isArrayHasData(questions) &&
          questions.map((question, idx) => (
            <div key={question.id} hidden={idx !== questionIndex}>
              <div className={styles.questionLabelImg}>
                <span>
                  <p>{question.label}</p>
                  <p className={styles.helperText}>
                    share your feedback for {selectedMember.name}
                  </p>
                </span>
                <User avatarUrl={selectedMember?.avatarUrl} />
              </div>

              <div className={styles.answerContainer}>
                {question.type === 'scale' ? (
                  <div className={styles.rateBarContainer}>
                    <RateBar />
                  </div>
                ) : question.type === 'multipleChoice' ? (
                  <MCQ options={question.options} />
                ) : (
                  <textarea
                    rows={15}
                    placeholder="Say something"
                    onChange={handleTextChange}
                  />
                )}

                <div className={styles.actions}>
                  <Button tertiary onClick={handlePrevious} disabled={!idx}>
                    Previous
                  </Button>
                  <Button
                    secondary
                    onClick={handleNext({ question, isSkipped: true })}
                    visible={question.required}
                  >
                    Skip
                  </Button>
                  <Button
                    tertiary
                    onClick={handleNext({ question })}
                    disabled={!questionAnswer}
                  >
                    {lastQuestion ? 'Submit' : 'Next'}
                  </Button>
                </div>
                <progress value={idx} max={questions.length} />
                <div className={styles.steps}>
                  {idx}/{questions.length}
                </div>
              </div>
            </div>
          ))}
      </div>
    </MainLayout>
  )
}

export default FeedbackSurvey
