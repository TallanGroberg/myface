import React, { useState, useEffect, } from 'react'
import axios from 'axios'
import { Card, Divider, Header, Image, } from 'semantic-ui-react'

const DownVote = () => {
   const [downVote, setDownVote] = useState([]);

 useEffect( () => {
   axios.get(`/api/down_vote`)
   .then( res => {
     setDownVote(res.data)
    console.log(downVote)
   })
 }, [])




  return (
    <>
    <Card.Group itemsPerRow={4}>
      {

    downVote.map( down => (
        <Card key={down.id}>
          <Image src={down.avatar} />
          <Card.Content>
            <Divider />
            <Card.Header>
              {down.name}
            </Card.Header>
          </Card.Content>
        </Card>
    ))
  }
</Card.Group>
    </>
  )
}

export default DownVote;
