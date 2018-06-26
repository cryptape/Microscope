import * as React from 'react'
import { Slide, IconButton, Snackbar } from '@material-ui/core'
import { Close as CloseIcon } from '@material-ui/icons'

const texts = require('../../styles/text.scss')

const SnackbarTransition = props => <Slide direction="left" {...props} />

export default ({ error, dismissNotification }) => (
  <Snackbar
    message={<span className={texts.error}>{error.message}</span>}
    open={!!error.message}
    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    // transition={SnackbarTransition}
    action={
      <React.Fragment>
        <a
          href="https://cryptape.github.io/cita/usage-guide/rpc_error_code/index.html"
          target="_blank"
          rel="noopener noreferrer"
          className={texts.highlight}
        >
          More
        </a>
        <IconButton onClick={dismissNotification} color="secondary">
          <CloseIcon />
        </IconButton>
      </React.Fragment>
    }
  />
)
