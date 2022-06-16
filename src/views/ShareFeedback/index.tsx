import { useContext, useMemo } from 'react'
import { useLocation } from 'react-router-dom'

import { UserContext } from 'context/UserProvider'
import { AccountContext } from 'context/AccountProvider'
import { MainLayout } from 'layouts'
import UsersList from './UsersList'
import styles from './giveFeedback.module.css'

const GiveFeedback = () => {
  const { state } = useLocation<any>()
  const domainUsers = useContext(UserContext)
  const userAccount = useContext(AccountContext)

  // To remove logged in user from user list to share feedback on
  const users = useMemo(
    () => domainUsers?.filter((user) => user.id !== userAccount?.id),
    [userAccount?.id, domainUsers],
  )

  return (
    <MainLayout loggedIn>
      <div className={styles.wrapper}>
        {state?.submittedFeedback ? (
          <div>
            <h1>Thank you for sharing your feedback!</h1>
            <p className={styles.description}>
              Continue to give feedback to other team members
            </p>
          </div>
        ) : (
          <h1>Share Feedback</h1>
        )}

        <UsersList users={users} />
      </div>
    </MainLayout>
  )
}

export default GiveFeedback
