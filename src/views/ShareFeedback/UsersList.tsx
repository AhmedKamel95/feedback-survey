import { useHistory } from 'react-router-dom'
import { User, Button } from 'components'
import styles from './giveFeedback.module.css'
import { isArrayHasData } from 'utils'
import { UserT } from 'context/types'

const UsersList = ({ users }: { users: UserT[] | undefined }) => {
  const history = useHistory()

  const handleClick = (user: UserT) => () => {
    // To handle `Fill out` or `View Submission`
    if (user.isFeedbackSubmitted) history.push('/my-feedback', user)
    else history.push('/feedback', user)
  }

  return isArrayHasData(users) ? (
    <ul className={styles.users}>
      {users?.map((user) => (
        <li key={user.id} className={styles.user}>
          <User name={user.name} avatarUrl={user.avatarUrl} />
          <span style={{ flex: 1 }} />
          <Button onClick={handleClick(user)}>
            {user.isFeedbackSubmitted ? 'View Submission' : 'Fill out'}
          </Button>
        </li>
      ))}
    </ul>
  ) : null
}

export default UsersList
