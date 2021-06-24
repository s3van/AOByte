import {useState} from 'react'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Paper from '@material-ui/core/Paper'
import {Post} from '../posts/Post'

export const List1 = ({listPosts, handleClick, handleRemove}) => {
    return (
        <Paper>
            <Button >
                <AddIcon onClick={(e) => handleClick(e, 'add', "1")} />
            </Button>

            <Button>
                <RemoveIcon />
            </Button>

            {listPosts.map((post, index) => {
                return <Post 
                name={post.post.name} 
                img={post.post.img} 
                text={post.post.text} 
                isAdded={true} 
                handleRemove={handleRemove} 
                currentIndex={index} 
                listId={"1"}/>
            })} 
        </Paper>
    )
}
