import { observer } from 'mobx-react-lite'
import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'semantic-ui-react'

export default observer( function HomePage() {
    return (
       <Container style={{marginTop:'7em'}}>
           <h1>Home Page</h1>
           <h3>Go to <Link to="/activities">Activities</Link></h3>
       </Container>
    )
}
)