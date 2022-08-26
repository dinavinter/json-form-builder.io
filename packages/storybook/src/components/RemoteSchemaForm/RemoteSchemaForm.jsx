import React,{useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Form from "@rjsf/material-ui";
import CircularProgress from '@material-ui/core/CircularProgress';


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
  const [schema,setSchema ] = useState({});
  const [loading,setLoading ]= useState(true);
  const [error,setError ] = useState();
  
    useEffect( () => {
        async function fetchData() {
            try {
                const result = await fetch(schemaUrl).then(e => e.json());
                console.log(result);
                setSchema(result);
                setLoading(false);
            }
            catch (e) {
                console.log(e);
                setError(`An error occurred. Please try again later ${e}`);

                setLoading(false)
            }            // ...
        }
        fetchData();

       
        
    },[schemaUrl])
  const classes = useStyles();

    if (loading || !schema) {
        return <CircularProgress />;
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


 