import React from 'react'
import ChatMsg from '@mui-treasury/components/chatMsg/ChatMsg'
import { IconButton, InputBase, makeStyles, Paper } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'

const useStyles = makeStyles(theme => ({
	root: {
		padding: '2px 4px',
		display: 'flex',
		alignItems: 'center',
		width: '100%'
	},
	input: {
		marginLeft: theme.spacing(1),
		flex: 1
	},
	iconButton: {
		padding: 10
	}
}));

const App = () => {
	const classes = useStyles();

	return (
		<>
			<div>
				<ChatMsg
					avater={''}
					messages={[
						'Hey what\'s up?',
						'Why aren\'t you responding?',
						'I thought you loved me??'
					]}
				/>
				<ChatMsg
					side={'right'}
					messages={[
						'Leave me alone',
						'You make my life a living hell'
					]}
				/>
				<ChatMsg avatar={''} messages={['Im good.', 'See u later.']} />
			</div>
			<Paper variant='outlined' component='form' className={classes.root}>
				<InputBase
					placeholder='Message'
					className={classes.input}
				/>
				<IconButton color='primary' className={classes.iconButton} aria-label='send'>
					<SendIcon />
				</IconButton>
			</Paper>
		</>
	)
}

export default App

