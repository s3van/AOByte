import { Avatar } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { Paper } from '@material-ui/core'
import { Box } from '@material-ui/core'
import CommentStyle from './Comments.module.css'

export const Comment = ({img, name, text, rate}) => {
    return (
        <Paper className={CommentStyle.paper}>
            <Box className={CommentStyle.wrapper}>
                <Box className={CommentStyle.imgWrap}>
                    <Avatar className={CommentStyle.img} alt="comment author" src={img} />
                    <Typography className={CommentStyle.text} variant="h5">{name}</Typography>
                </Box>

                <Box className={CommentStyle.rateWrap}>
                    <Typography>{rate}</Typography>
                </Box>
            </Box>
            
            <Typography variant="body2">{text}</Typography>
        </Paper>
    )
}
