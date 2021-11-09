import { makeStyles } from "@mui/styles"
export default makeStyles({
     main:{
        background: 'rgb(255,255,255)',
        borderRadius: '5px',
        boxSizing: 'border-box',
        width: '100%',
        maxWidth: '900px',
        margin:'100px 12.5px 100px 25px',
        padding: '60px 68px 40px',
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
    },
    secondary:{
        display: 'flex',
        flexDirection: 'column',
        background: 'rgb(255,255,255)',
        borderRadius: '5px',
        boxSizing: 'border-box',
        margin:'100px 25px 100px 12.5px',
        width: '100%',
        maxWidth: '500px',
        padding: '60px 68px 40px',
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
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

})