import React from 'react';
import axios from 'axios';
import { Link, } from 'react-router-dom';
import { Header, Image, Card, Button, Icon, } from 'semantic-ui-react';

class Home extends React.Component {
  state = { cats: [], };

  componentDidMount() {
    axios.get('/api/cats')
      .then(res => this.setState({ cats: res.data, }))
  }

  sample = () => {
    const { cats, } = this.state;

    if (cats.length) {
      const index = Math.floor(Math.random() * cats.length);
      return cats[index];
    } else {
      return null;
    }
  }

  render() {
    const cat = this.sample();
    if (cat) {
      return (
        <div>
          <br />
          <Header as='h1'>Cat Tinder</Header>
          <br />
          <Card key={cat.id}>
            <Image src={cat.avatar} />
            <Card.Content>
              <Card.Header>
                { cat.name }
              </Card.Header>
              <Card.Description>
                { cat.breed }
              </Card.Description>
              <Card.Meta>
                { cat.registry }
              </Card.Meta>
            </Card.Content>
            <Card.Content extra>
              <Button color="red" icon basic>
                <Icon name="thumbs down" />
              </Button>
              <Button color="green" icon basic>
                <Icon name="thumbs up" />
              </Button>
            </Card.Content>
          </Card>
          <Link to="/my_cats">
            <Button color="blue">
              My Cats
            </Button>
          </Link>
        </div>
      );
    } else {
      return <Header textAlign="center">No More Cats</Header>
    }
  }
}

export default Home;
