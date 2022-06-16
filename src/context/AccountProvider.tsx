import { createContext, ReactNode, useReducer } from 'react'
import { UserT } from './types'

type DispatchAccountContextT = any

type LoginAccountT = {
  action: 'login'
  payload: UserT
}

type LogoutAccountT = {
  action: 'logout'
}

export const DispatchAccountContext =
  createContext<DispatchAccountContextT | null>(null)

export const AccountContext = createContext<UserT | null>(null)

const reducer = (
  state: UserT | null,
  update: LoginAccountT | LogoutAccountT,
): UserT | null => {
  if (update.action === 'login') return update.payload
  else if (update.action === 'logout') return null

  return state
}

const UIProvider = ({ children }: { children: ReactNode }): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, null)

  return (
    <DispatchAccountContext.Provider value={dispatch}>
      <AccountContext.Provider value={state}>
        {children}
      </AccountContext.Provider>
    </DispatchAccountContext.Provider>
  )
}

export default UIProvider
