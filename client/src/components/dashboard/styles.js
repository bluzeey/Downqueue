import { makeStyles } from "@mui/styles"
export default makeStyles({
   container:{
       display:'flex',
       width:'100%',
       background:'lightgray',
       justifyContent:'space-around',
       height:'100vh',
       '@media (max-width: 810px)' : {
           flexDirection:'column',
           height:'120vh',
         },
        
   },
   instructions:{
       display:'flex',
       padding:'1em',
       flexDirection:'column',
       alignSelf:'center',
       margin:'0 1em',
       maxWidth:'400px',
       '@media (max-width: 810px)' : {
         margin:'unset',
         marginBottom:'20px',
         width:'85%'
        }
   },
   calenders:{
       display:'flex',
       padding:'1em',
       alignSelf:'center',
       justifyContent: 'space-between',
       overflow:'scroll',
       '&>*':{
         margin: '.5em'
        },
       '@media (max-width: 810px)' : {
           margin:'unset',
           width:'85%',
           flexDirection:'column',
           '&:first-child': {
            marginBottom: '2em'
            }
        },

        
   },
   searchBar:{
       display:'flex',
       flexDirection:'column',
       alignSelf:'center',
       padding:'1em',
       margin:'0 1em',
       '@media (max-width: 810px)' : {
         margin:'unset',
         marginTop:'1em',
         width:'85%',
         maxWidth:'300px'
        }
   },
   btn:{
        borderRadius: '4px',
        fontSize: '16px',
        fontWeight: 'bold',
        marginTop: '15px',
        border: '0',
        padding:'1em',
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
   },
   icon:{
       transform: 'translateY(20%)'
   }
})