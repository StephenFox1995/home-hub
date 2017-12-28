import React from 'react';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

const styles = {
  root: {
    width: '100%',
  },
};

const SimpleAppBar = () => (
  <div className="app-bar">
    <AppBar position="static" color="default">
      <Toolbar>
        <Typography type="title" color="inherit">
          Home Hub
        </Typography>
      </Toolbar>
    </AppBar>
  </div>
);

export default withStyles(styles)(SimpleAppBar);
