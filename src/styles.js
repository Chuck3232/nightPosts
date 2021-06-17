import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    borderRadius: 5,
    borderStyle: 'double',
    borderColor: 'rgb(230, 0, 0, .7)',
    borderWidth: '5px',
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    
    justifyContent: 'left',
    alignItems: 'center',
    boxShadow: '0 0 10px #cc0000',    
  },
  heading: {
    color: 'rgb(230, 0, 0, 80)',
  },
  image: {
    marginLeft: '15px',
    height: '80px',
    weight: '80px'
  },
  mainContainer:{
    flexDirection: 'column-reverse',
  },
  lngBtn:{
    width: '10px',
  }
}));