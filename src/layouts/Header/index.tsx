import { useContext } from 'react'
import { NavLink } from 'react-router-dom'

import { AccountContext, DispatchAccountContext } from 'context/AccountProvider'
import { User } from 'components'
import styles from './header.module.css'

const Header = () => {
  const currentUser = useContext(AccountContext)
  const logoutUser = useContext(DispatchAccountContext)

  const handleLogout = () => logoutUser({ action: 'logout' })

  return (
    <div className={styles.header}>
      <h1>Honesto</h1>
      <NavLink exact to="/share-feedback" activeClassName={styles.active}>
        Share Feedback
      </NavLink>
      <NavLink exact to="/my-feedback" activeClassName={styles.active}>
        My Feedback
      </NavLink>
      <NavLink exact to="/team-feedback" activeClassName={styles.active}>
        Team Feedback
      </NavLink>
      <span className={styles.spacer} />

      <NavLink exact to="/" onClick={handleLogout}>
        <User avatarUrl={currentUser?.avatarUrl} />
        <div className={styles.logoutContainer}>
          {currentUser && `${currentUser.name}`}
          <p>Logout</p>
        </div>
      </NavLink>
    </div>
  )
}
export default Header
