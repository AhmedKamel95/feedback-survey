import { useState, useContext, useEffect, useMemo } from 'react'
import { useLocation } from 'react-router-dom'

import { AccountContext } from 'context/AccountProvider'
import {
  feedbackCollection,
  ShareFeedbackContext,
} from 'context/ShareFeedbackProvider'
import { MainLayout, NoFeedback } from 'layouts'
import { User, RateBar } from 'components'
import staticTeamFeedback from 'mocks/teamFeedback'
import { isArrayHasData } from 'utils'
import styles from './reviewFeedback.module.css'

const ReviewFeedback = () => {
  const { pathname, state: memberViewSubmission } = useLocation<any>()

  const userAccount = useContext(AccountContext)
  const isTeamFeedbackView: boolean = pathname === '/team-feedback'
  const { feedbackCollection } = useContext(ShareFeedbackContext)
  const [selectedMember, setSelectedMember] =
    useState<feedbackCollection | null>(null)
  const [membersList, setMembersList] = useState<feedbackCollection[]>([])

  // To filter out logged in member from staticTeamFeedback
  const mockedTeamFeedback = useMemo(
    () =>
      staticTeamFeedback.filter(
        (member) => member.member.id !== userAccount?.id,
      ),
    [userAccount?.id],
  )

  const handleSelectUser = (member: feedbackCollection) => () =>
    setSelectedMember(member)

  useEffect(() => {
    // Populating membersList either by mockedData or submitted feedback depending on View
    if (isTeamFeedbackView) setMembersList(mockedTeamFeedback)
    else if (isArrayHasData(feedbackCollection))
      setMembersList(feedbackCollection)
  }, [feedbackCollection, isTeamFeedbackView, mockedTeamFeedback])

  useEffect(() => {
    // To directly display the selected user from the `View Submission` button
    if (memberViewSubmission) {
      const filteredFeedback = feedbackCollection.filter(
        (f) => f.member.id === memberViewSubmission.id,
      )
      setSelectedMember({
        member: memberViewSubmission,
        feedback: filteredFeedback[0].feedback,
      })
    }
  }, [memberViewSubmission, feedbackCollection])

  return (
    <MainLayout loggedIn>
      {!isTeamFeedbackView && !isArrayHasData(feedbackCollection) ? ( //Displaying no feedback yet
        <NoFeedback />
      ) : (
        <>
          <h2>{isTeamFeedbackView ? 'Team Feedback' : 'My Feedback'}</h2>

          <div className={styles.feedbackContainer}>
            <ul className={styles.users}>
              <li>
                <h3>Feedback given</h3>
              </li>
              {membersList.map((obj) => (
                <li
                  key={obj.member.id}
                  onClick={handleSelectUser(obj)}
                  className={
                    obj.member.id === selectedMember?.member?.id
                      ? styles.selectedUser
                      : styles.user
                  }
                >
                  <User
                    name={obj.member.name}
                    avatarUrl={obj.member.avatarUrl}
                  />
                </li>
              ))}
            </ul>

            <ul className={styles.feedback}>
              {selectedMember && (
                <>
                  <li>
                    <h2>{selectedMember.member.name}'s Feedback</h2>
                  </li>
                  {selectedMember.feedback.map((feedback) => (
                    <li>
                      <div className={styles.answerContainer}>
                        <p>{feedback.label}</p>
                        {feedback.skipped ? (
                          <span>Skipped</span>
                        ) : feedback.type === 'scale' ? (
                          <div className={styles.rateBarContainer}>
                            <RateBar givenRate={feedback.value as number} />
                          </div>
                        ) : feedback.type === 'multipleChoice' ? (
                          //@ts-ignore
                          feedback?.options.map((option) =>
                            option.value === feedback.value ? (
                              <p>{option.label}</p>
                            ) : null,
                          )
                        ) : (
                          <p>{feedback.value}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </>
              )}
            </ul>
          </div>
        </>
      )}
    </MainLayout>
  )
}

export default ReviewFeedback
