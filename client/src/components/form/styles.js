import { makeStyles } from "@mui/styles"
export default makeStyles({
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
    form:{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '450px',
        width: '100%',
    },
    container:{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '660px',
        background: 'rgb(255,255,255)',
        borderRadius: '5px',
        boxSizing: 'border-box',
        width: '100%',
        margin: 'auto',
        maxWidth: '450px',
        marginTop:'100px',
        padding: '60px 68px 40px',
        marginBottom: '100px',
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
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