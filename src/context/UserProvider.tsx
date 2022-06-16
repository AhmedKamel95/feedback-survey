import { createContext, ReactNode, useReducer } from 'react'
import { UserT } from './types'

type DispatchUserContextT = any

type SetUsersT = {
  action: 'set'
  payload: UserT[]
}

export const DispatchUserContext = createContext<DispatchUserContextT | null>(
  null,
)
export const UserContext = createContext<UserT[] | null>(null)

const reducer = (state: UserT[] | null, update: SetUsersT): UserT[] | null => {
  if (update.action === 'set') {
    return update.payload
  }

  return state
}

const UIProvider = ({ children }: { children: ReactNode }): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, [])

  return (
    <DispatchUserContext.Provider value={dispatch}>
      <UserContext.Provider value={state}>{children}</UserContext.Provider>
    </DispatchUserContext.Provider>
  )
}

export default UIProvider
