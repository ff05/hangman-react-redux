import React, { PureComponent } from 'react'

export default class Hangman extends PureComponent {
  render() {
      switch(this.props.wrongs) {
        case 1:
        return (<pre>
            ___________<br />
           |  /        ||<br />
           | /        ----<br />
           |/        | ++ |<br />
           |          ----<br />
           |<br />
           |<br />
           |<br />
      ___________
          </pre>)
        case 2:
        return (<pre>
            ___________<br />
           |  /        ||<br />
           | /        ----<br />
           |/        | ++ |<br />
           |          ----<br />
           |           ||<br />
           |<br />
           |<br />
      ___________
          </pre>)
        case 3:
        return (<pre>
            ___________<br />
           |  /        ||<br />
           | /        ----<br />
           |/        | ++ |<br />
           |          ----<br />
           |         \_||<br />
           |<br />
           |<br />
      ___________
          </pre>)
        case 4:
        return (<pre>
            ___________<br />
           |  /        ||<br />
           | /        ----<br />
           |/        | ++ |<br />
           |          ----<br />
           |         \_||_/<br />
           |<br />
           |<br />
      ___________
          </pre>)
        case 5:
        return (<pre>
            ___________<br />
           |  /        ||<br />
           | /        ----<br />
           |/        | ++ |<br />
           |          ----<br />
           |         \_||_/<br />
           |           |<br />
           |          /<br />
      ___________
          </pre>)
        case 6:
        return (<pre>
            ___________<br />
           |  /        ||<br />
           | /        ----<br />
           |/        | ++ |<br />
           |         | /\ |<br />
           |          ----<br />
           |         \_||_/<br />
           |           ||<br />
           |          /  \<br />
           ___________
          </pre>)
        default:
        return (<pre>
                  ___________<br />
                 |  /        ||<br />
                 | / <br />
                 |/ <br />
                 |<br />
                 |<br />
                 |<br />
                 |<br />
                ___________
          </pre>)
      }
  }
}
