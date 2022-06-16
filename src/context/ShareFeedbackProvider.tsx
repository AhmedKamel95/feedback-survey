import { createContext, ReactNode, useReducer } from 'react'
import { Option } from './QuestionProvider'
import { UserT } from './types'

type feedback = {
  id: string
  label: string
  required: boolean
  skipped: boolean
  type: 'scale' | 'multipleChoice' | 'text'
  value: number | string | null
  options?: Option[]
}

export type feedbackCollection = {
  member: UserT
  feedback: feedback[]
}

type SharedFeedback = {
  user: UserT | null
  questionAnswer: string | number | null
  feedback: feedback[]
  feedbackCollection: feedbackCollection[]
}

type SetFeedbackT = {
  action: string
  payload: any
}

type DispatchQuestionContextT = any

export const DispatchShareFeedbackContext =
  createContext<DispatchQuestionContextT | null>(null)

const initialState: SharedFeedback = {
  user: null,
  questionAnswer: null,
  feedback: [],
  feedbackCollection: [],
}

export const ShareFeedbackContext = createContext<SharedFeedback>(initialState)

const reducer = (state: SharedFeedback, update: SetFeedbackT) => {
  switch (update.action) {
    case 'setAnswer':
      return {
        ...state,
        questionAnswer: update.payload,
      }

    case 'appendAnswer':
      return {
        ...state,
        feedback: [...state?.feedback, update.payload],
      }

    case 'submitMemberFeedback':
      return {
        ...state,
        feedback: [],
        feedbackCollection: [
          ...state.feedbackCollection,
          {
            member: update.payload,
            feedback: state?.feedback,
          },
        ],
      }

    default:
      return state
  }
}

const UIProvider = ({ children }: { children: ReactNode }): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <DispatchShareFeedbackContext.Provider value={dispatch}>
      <ShareFeedbackContext.Provider value={state}>
        {children}
      </ShareFeedbackContext.Provider>
    </DispatchShareFeedbackContext.Provider>
  )
}

export default UIProvider
