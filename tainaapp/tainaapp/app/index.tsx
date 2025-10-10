import{View, Text, StyleSheet} from 'react-native';


// App Body

export default function App(){

  return(

    <View style = {styles.central}>

    <Text style = {styles.text}>APP BARBEARIA</Text>
    <Text style = {styles.text2}>A MELHOR BARBEARIA DA CIDADE</Text>

    </View>

  );
}


// Style Area

const styles = StyleSheet.create({

  central:{

    backgroundColor: '#5a0609ff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },

  text:{
    color: '#ffffff',
    fontSize: 40,
    fontWeight: '900',
  },

  text2:{
    color: '#87c4aaff',
    fontSize: 20,
    fontWeight: '600',
  },

})