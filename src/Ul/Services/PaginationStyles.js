import React from 'react';
import Pagination from "@material-ui/lab/Pagination";
import {makeStyles}  from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
        
    ul: {
        "& .MuiPaginationItem-root": {
            color: '#fff',
          backgroundColor:"#384c74"
        }
    }
}));

  const BasicPagination = (props) => {
  const classes = useStyles();
  return <Pagination classes={{ ul: classes.ul }} count={5} onChange={props.change}/>;
}

export default BasicPagination;
