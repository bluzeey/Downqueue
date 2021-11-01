import { makeStyles } from "@mui/styles"
export default makeStyles({
   container:{
       display:'flex',
       width:'100%',
       background:'lightgray',
       justifyContent:'space-around',
       height:'100vh',
   },
   instructions:{
       display:'flex',
       padding:'1em',
       flexDirection:'column',
       alignSelf:'center',
       maxWidth:'300px',
       margin:'0 2em'
   },
   calenders:{
       display:'flex',
       flexDirection:'column',
       height:'80%',
       alignSelf:'center',
       justifyContent: 'space-between'
   },
   searchBar:{
       display:'flex',
       flexDirection:'column',
       alignSelf:'center',
       padding:'1em',
       margin:'0 2em'
   },
   btn:{
        borderRadius: '4px',
        fontSize: '16px',
        fontWeight: 'bold',
        margin: '15px',
        border: '0',
        color: 'white',
        cursor: 'pointer',
        background:'rgba(1, 93, 231, 1)',
        textDecoration:'none',
        textTransform:'uppercase',
        textAlign:'center',

        '&:hover':{
            transform:'scale(1.2)',
            transition:'transform .5s'
        }
   }
})