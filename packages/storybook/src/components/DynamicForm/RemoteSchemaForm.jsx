import React,{useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
 import Form from "@rjsf/material-ui";
import Loading from "@material-ui/core/Loading";


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

export const RemoteSchemaForm = props => {
  const { backgroundColor, schemaUrl, uiSchema } = props;
  const {setSchema, schema} = useState({});
  const {setLoading, loading} = useState(true);
  const {setError, error} = useState();
  
    useEffect(async () => {
        try {
            const result = await fetch(schemaUrl).then(e => e.json());
            setSchema(result);
            setLoading(false); 
        }
        catch (e) {
            setLoading(false)
            setError(`An error occurred. Please try again later ${e}`); 
        }
        
    })
  const classes = useStyles();

    if (loading) {
        return <Loading />;
    }
    if (error) {
        return <div style={{ color: "red" }}>{error}</div>;
    }

    return (
    <div className={classes.root} style={{ backgroundColor }}>

        <Form schema={schema}
              uiSchema={uiSchema}
              onChange={log("changed")}
              onSubmit={log("submitted")}
              onError={log("errors")} />
    </div>
  );
};


 