import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
 import Form from "@rjsf/material-ui";

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 345,
    width: '100%',
    '& > *': {
      margin: theme.spacing(1),
    },
  }
 
}));

 function  log(text) {
  return (e)=>{
    console.log(text);
    console.log(e);

  }
    
}

export const DynamicForm = props => {
  const { backgroundColor, schema } = props;
  const classes = useStyles();
  return (
    <div className={classes.root} style={{ backgroundColor }}>

        <Form schema={schema}
              onChange={log("changed")}
              onSubmit={log("submitted")}
              onError={log("errors")} />
    </div>
  );
};


 