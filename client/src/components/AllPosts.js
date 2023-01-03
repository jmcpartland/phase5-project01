import React, { useContext, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { UserContext } from '../context/user';
import Posts from '../components/Posts'

function AllPosts() {
    const {loggedIn} = useContext(UserContext)
    const [posts, setPosts] = useState([])

    useEffect(() => { 
        fetch('/all-posts')
        .then(res => res.json())
        .then(data => {
            setPosts(data)
        })
    }, [])

    const postListing = posts.map(p => <Posts key={p.id} post={p} />)

    if (loggedIn) {
        return (
            <Box spacing={2} margin={2}>
              <Grid container spacing={4}>
                {postListing}
              </Grid>
            </Box>
        )
    } else {
      <div>
          <h3>You need to be logged in read posts</h3>
      </div>
    }
}

export default AllPosts