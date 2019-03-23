import React, { Component } from 'react';
//import Movies from './Movies.js';
import './App.css';
import {
  Typography,
  Grid,
  Button,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TextField,
  Card
} from '@material-ui/core'; 

import data from './imdb-top-50.json';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { data }
    this.sortByPriceAsc = this.sortByPriceAsc.bind(this);
    this.sortByPriceDesc = this.sortByPriceDesc.bind(this);
  };

  sortByPriceAsc() {
    this.setState(prevState => {
      this.state.data.data.movies.sort((a, b) => (a.rating - b.rating))
      console.log(data.data.movies[0].rating)
  });
  }

  sortByPriceDesc() {
    this.setState(prevState => {
      this.state.data.data.movies.sort((a, b) => (b.rating - a.rating))
  });
  } 

  render() {
    return (
      <Grid>
            <Button onClick={this.sortByPriceAsc}>
          ASC
        </Button>
        <Button onClick={this.sortByPriceDesc}>
          DESC
        </Button>

            {data.data.movies.map((el, index) => 
                <Card>
                    <img src={el.urlPoster} alt='no pic'/>
                    <Typography >                        
                        {el.title}
                    </Typography>
                    <Typography >
                        {el.year}
                    </Typography>               
            </Card>
            )} 
        </Grid>
    );
  }
}

export default App;
