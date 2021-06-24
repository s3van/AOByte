import './App.css';
import { Pool } from './posts/Pool';
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import { List1 } from './lists/List1';
import { List2 } from './lists/List2';
import {postsData} from './posts/postsData';
import {useState} from 'react';

function App() {
 
  const [list1Posts, setList1Posts] = useState([]);
  const [list2Posts, setList2Posts] = useState([]);
  const [userPostIndex, setuserPostIndex] = useState(postsData.length - 1);
  const [removeIndex, setRemoveIndex] = useState(0);

  const handleClick = (e, id, listId) => {
    
    if (listId === "1") {
      switch(id) {
        case 'add': {
          setList1Posts([
            ...list1Posts, {
            post : postsData[userPostIndex],
            isEmpty: false
          }]);
          
          setuserPostIndex(userPostIndex - 1);
          break;
        }
  
        case 'remove': {
          break;
        }
      }
    } else if (listId === "2") {
      switch(id) {
        case 'add': {
          setList2Posts([
            ...list2Posts, {
            post : postsData[userPostIndex],
            isEmpty: false
          }]);  

          setuserPostIndex(userPostIndex - 1);
          break;
        }
  
        case 'remove': {
          break;
        }
      }
    }
  }

  const handleRemove = (e, removeIndex, listId) => {
    setuserPostIndex( userPostIndex - removeIndex);
    listId === "1" ? 
    setList1Posts(list1Posts.filter((post,index) => index !== removeIndex)) 
    : 
    setList2Posts(list2Posts.filter((post,index) => index !== removeIndex)) 
  }

  return (
    <div className="App">
      <Container fixed>
        <Pool />
        <Grid container>
          <Grid item md={6}>
            <List1 listPosts={list1Posts} handleClick={handleClick} handleRemove={handleRemove}/>
          </Grid>
          <Grid item md={6}>
            <List2  listPosts={list2Posts} handleClick={handleClick} handleRemove={handleRemove}/>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
