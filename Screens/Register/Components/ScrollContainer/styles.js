import Theme from '../../../../assets/Theme'
const styles = {
    container:{
        flex:1
    },
    welcomeText:{
        paddingVertical: 15,
        color: Theme.primary
    },
    formInputs:{
        flex:1,
        flexDirection: 'column',
        justifyContent: 'center', 
        width: '100%'
    },
    textInputStyle:{
        borderWidth: 1,
        borderColor: Theme.primary,
        width: '100%',
        paddingVertical: 5,
        paddingHorizontal: 15,
        fontSize: 15, 
        color: Theme.primary,
        marginVertical: 10
    },
    loginButton:{
      marginVertical: 20,
      width: '100%',
      backgroundColor: Theme.primary,
      paddingVertical: 15
    },
    buttonTexts1:{
      color: Theme.white,
      fontWeight: 'bold',
      width: '100%',
      textAlign: 'center', 
      fontSize: 15
    },
    terms:{
        textAlign: 'center',
        color: Theme.secondary
    }
}

export default styles