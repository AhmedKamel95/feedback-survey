import { useEffect, useContext } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import {
  Components,
  Home,
  NotFound,
  ReviewFeedback,
  FeedbackSurvey,
  ShareFeedback,
} from 'views'
import ErrorHandler from './ErrorHandler'
import { PrivateRoute } from 'components'
import { DispatchUserContext } from 'context/UserProvider'
import { AccountContext } from 'context/AccountProvider'
import { DispatchQuestionContext } from 'context/QuestionProvider'
import http from 'common/http'

const App = () => {
  const currentUser = useContext(AccountContext)
  const userDispatch = useContext(DispatchUserContext)
  const questionDispatch = useContext(DispatchQuestionContext)
  const isLoggedIn = currentUser != null

  useEffect(() => {
    Promise.all([http.get('questions'), http.get('people')]).then(
      ([questions, people]) => {
        userDispatch({
          action: 'set',
          payload: people.map((user: any) => ({
            ...user,
            isFeedbackSubmitted: false,
          })),
        })

        questionDispatch({
          action: 'set',
          payload: questions,
        })
      },
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <BrowserRouter>
      <ErrorHandler>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <PrivateRoute isLoggedIn={isLoggedIn} exact path="/my-feedback">
            <ReviewFeedback />
          </PrivateRoute>
          <PrivateRoute isLoggedIn={isLoggedIn} exact path="/team-feedback">
            <ReviewFeedback />
          </PrivateRoute>
          <PrivateRoute isLoggedIn={isLoggedIn} exact path="/share-feedback">
            <ShareFeedback />
          </PrivateRoute>
          <PrivateRoute isLoggedIn={isLoggedIn} exact path="/components">
            <Components />
          </PrivateRoute>
          <PrivateRoute isLoggedIn={isLoggedIn} exact path="/feedback">
            <FeedbackSurvey />
          </PrivateRoute>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </ErrorHandler>
    </BrowserRouter>
  )
}

export default App
