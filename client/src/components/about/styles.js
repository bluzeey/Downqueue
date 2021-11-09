import { makeStyles } from "@mui/styles"
export default makeStyles({
    background:{
        padding:'2em',
        backgroundImage:`url(assets/images/about.jpg)`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        display:'flex',
        justifyContent:'space-around',
        alignItems:'center',
        '@media (max-width: 840px)': {
           flexDirection:'column',
         },
    },
    main:{
        background: 'rgb(255,255,255)',
        borderRadius: '5px',
        boxSizing: 'border-box',
        width: '100%',
        maxWidth: '900px',
        margin:'100px 25px 100px 12.5px',
        padding: '60px 68px 40px',
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        '@media (max-width: 840px)': {
           margin:'25px auto'
         },
    },
    font:{
        fontFamily:'Source Sans Pro'
    },
    fontHeading:{
        fontFamily:'Source Sans Pro',
        fontWeight:'700'
    },
    secondary:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'center',
        background: 'rgb(255,255,255)',
        borderRadius: '5px',
        boxSizing: 'border-box',
        margin:'100px 12.5px 100px 25px',
        width: '100%',
        maxWidth: '500px',
        padding: '60px 68px 40px',
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        '@media (max-width: 840px)': {
           margin:'25px auto'
         },
    },
    title:{
        color: 'rgba(1, 93, 231, 0.7)',
        fontSize: '2.5rem',
        fontWeight: 'light',
        marginBottom: '28px',
        textAlign:'center',
    },
    text:{
        color: '#434656',
        fontWeight: '400',
    },
    error:{
        background: '#e87c03',
        borderRadius: '4px',
        fontSize: '14px',
        margin: '0 0 16px',
        color: 'white',
        padding: '15px 20px',
    },
    inputField:{
        borderRadius: '4px',
        height: '50px',
        lineHeight: '50px',
        margin: '10px',
        
    },
    textArea:{
        borderRadius: '4px',
        height: '150px',
        lineHeight: '50px',
        margin: '10px',
        paddingBottom:'20px'
    },
    form:{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '450px',
        width: '100%',
    },
    button:{
        borderRadius: '4px',
        fontSize: '16px',
        fontWeight: 'bold',
        margin: '15px',
        border: '0',
        color: 'white',
        cursor: 'pointer',
        background:'rgba(1, 93, 231, 1)',
        '&:disabled': {
            background:'rgba(1, 93, 231, 0.5)',
            color: 'white'
        } 
    },
    link:{
        textDecoration:'none',
        color:'rgba(1, 93, 231, 1)'
    },
    select:{
        margin: '5px',
    }
})