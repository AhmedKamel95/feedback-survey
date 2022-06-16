import { createContext, ReactNode, useReducer } from 'react'

export type Option = {
  label: string
  value: number
}

export type QuestionT = {
  id: string
  type: 'scale' | 'text' | 'multipleChoice'
  required: boolean
  label: string
  options?: Option[]
  isSkipped?: boolean
}

type DispatchQuestionContextT = any

export const DispatchQuestionContext =
  createContext<DispatchQuestionContextT | null>(null)
export const QuestionContext = createContext<QuestionT[]>([])

type SetQuestionsT = {
  action: 'set'
  payload: Array<QuestionT>
}

const reducer = (
  state: QuestionT[],
  update: SetQuestionsT,
): QuestionT[] | null => {
  if (update.action === 'set') {
    return update.payload
  }

  return state
}

const UIProvider = ({ children }: { children: ReactNode }): JSX.Element => {
  //@ts-ignore
  const [state, dispatch] = useReducer(reducer, [])

  return (
    <DispatchQuestionContext.Provider value={dispatch}>
      <QuestionContext.Provider value={state}>
        {children}
      </QuestionContext.Provider>
    </DispatchQuestionContext.Provider>
  )
}

export default UIProvider
