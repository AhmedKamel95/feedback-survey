import { MainLayout } from 'layouts'
import { Button, Spinner, User } from 'components'

const Components = () => (
  <MainLayout loggedIn>
    <h1>heading 1</h1>
    <h2>heading 2</h2>
    <h3>heading 3</h3>
    <p>
      {/* eslint-disable-next-line */}
      Lorem ipsum dolor sit <a>amet consectetur adipisicing elit</a>. Excepturi
      aspernatur, sapiente corrupti obcaecati consequuntur corporis tempora
      deserunt quis labore eos sequi adipisci quas totam ad voluptate molestiae
      unde.
    </p>

    <Button onClick={() => {}}>Primary button</Button>

    <Button secondary onClick={() => {}}>
      Secondary button
    </Button>
    <br />
    <Spinner />
    <div />
    <User name="John David" />
    <User name="John David" avatarUrl="https://i.pravatar.cc/150?img=68" />
  </MainLayout>
)

export default Components
