import { makeStyles } from "@mui/styles"
export default makeStyles({
   container:{
       display:'flex',
       padding:'5em 0',
       background:'lightgray',
       justifyContent:'space-around'
   },
   instructions:{
       display:'flex',
       padding:'1em',
       flexDirection:'column',
       marginLeft:'2em',
       alignSelf:'center',
       maxWidth:'300px',
       margin:'0 2em'
   },
   calenders:{
       display:'flex',
   },
   searchBar:{
       display:'flex',
       flexDirection:'column',
       alignSelf:'center',
       marginRight:'2em',
       padding:'1em',
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