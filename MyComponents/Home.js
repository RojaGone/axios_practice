import React from 'react';
import {TextInput, Button,} from 'react-native-paper';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ToastAndroid,

} from 'react-native';



const Home = (props) => {
    const [title, setTitle] = React.useState('');
    const [body, setBody] = React.useState('');
    const [userId, setUserId] = React.useState('');
    const [isEdit, setIsEdit]=React.useState(false);

    const showToast = () => {
        if(title == '' || body == '' || userId == ''){
            ToastAndroid.show("please enter data", ToastAndroid.LONG);
        }else{
            props.nav.navigation.navigate('postPage',{
                userIdRev: userId,
                titleRev: title,
                bodyRev: body,
                isEdit: 'true'
            })
            setIsEdit(true)
            setUserId('');
            setTitle('')
            setBody('')
            ToastAndroid.show("Successfully data posted", ToastAndroid.LONG);
        }
        
      };

  return (
    <View style={styles.container}>
      <Text style={styles.head}>Home page</Text>
   <TextInput
        style={styles.input}
        label="UserId"
        mode="outlined"
        keyboardType="numeric"
        placeholder={'Enter UserId....'}
        value={userId}
        onChangeText={userId => setUserId(userId)}
      />

      <TextInput
        style={styles.input}
        label="Title"
        mode="outlined"
        placeholder={'Enter title....'}
        value={title}
        onChangeText={title => setTitle(title)}
      />

      <TextInput
        style={styles.input}
        label="Body"
        mode="outlined"
        placeholder={'Enter Body....'}
        value={body}
        onChangeText={body => setBody(body)}
      />
    <Button
     style={styles.bg}
      icon="forward"
      mode="contained"
      onPress={() => showToast()}>
      Post
    </Button>
    
    <Button
     style={styles.bg}
      icon="star"
      mode="contained"
      onPress={() => props.nav.navigation.navigate('GetPage')}>
      get
    </Button>
   
   </View>
    
  );
};

const styles = StyleSheet.create({
    bg:{
        marginTop: 10,
        width: '90%',
    },
    head: {
      fontSize: 26,
      color: '#600EE6',
      fontWeight: 'bold',
      paddingVertical: 14,
    },
    input:{
      width: '90%',
    },
    container: {
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignSelf: 'center',
      alignContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    },
})

export default Home;

