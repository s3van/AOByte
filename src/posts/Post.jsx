import PostStyle from "./Post.module.css";
import Button from "@material-ui/core/Button";
import { Avatar } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { Comment } from "../comments/Comment";
import { commentsData } from "../comments/commentsData";
import { Grid } from "@material-ui/core";

export const Post = ({
  img,
  name,
  text,
  isAdded,
  handleRemove,
  userIndex,
  listId,
}) => {
  return (
    <>
      <Paper className={PostStyle.paper}>
        <Box className={PostStyle.imgWrap}>
          <Avatar className={PostStyle.img} alt="comment author" src={img} />
          <Typography className={PostStyle.text} variant="h6">
            {name}
          </Typography>
          <Button onClick={(e) => handleRemove(e, userIndex, listId)}>
            {isAdded ? "-" : null}
          </Button>
        </Box>
        <Typography variant="body1">{text}</Typography>
      </Paper>

      <Typography variant="body1">Comments</Typography>

      {!isAdded
        ? commentsData.map((comment, index) => {
            return (
              <Grid container justify="center" key={index}>
                <Grid item xs={6}>
                  <Comment
                    name={comment.name}
                    img={comment.img}
                    text={comment.text}
                    rate={comment.rate}
                  />
                </Grid>
              </Grid>
            );
          })
        : null}
    </>
  );
};
