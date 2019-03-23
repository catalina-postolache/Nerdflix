import React, { Component } from 'react';
import './App.css';
import {
  Typography,
  Grid,
  Button,
  Card
} from '@material-ui/core'; 

import data from './imdb-top-50.json';

class App extends Component {
  
  constructor (props) {
    super(props)
    this.toggleListReverse = this.toggleListReverse.bind(this)
    this.toggleSortRatings = this.toggleSortRatings.bind(this)
    this.like = this.like.bind(this)

    this.state = {
      ratings: [],
      count: data.data.movies.votes,
      isOldestFirst: true,
    }
  }

  toggleSortRatings (event) {
    this.sortByRatings()
  }
  toggleListReverse (event) {
    const {ratings} = this.state
    let newRatings = ratings.reverse()
    this.setState({
      ratings: newRatings
    })
  }
  like() {
    const {count} = this.state

    this.setState({
      count: count + 1
    });
  };

  componentDidMount () {
    const ratings = data.data.movies
    this.setState({
      isOldestFirst: true,
      ratings: ratings,
    })
  }

  render() {
    return (
      <Grid>
          <Button variant="contained"  color="primary" onClick={this.toggleListReverse}>Rating order</Button>

            {data.data.movies.map((el) => 
                <Card key={el.ranking}>
                    <img src={el.urlPoster} alt='no pic'/>
                    <Typography >                        
                        {el.title}
                    </Typography>
                    <Typography >
                        {el.year}
                    </Typography>       
                    <Typography >
                        {el.votes}
                    </Typography>    
                    <Button variant="contained"  color="secondary" onClick={this.like}>Like</Button>     
            </Card>
            )} 
        </Grid>
    );
  }
}

export default App;
