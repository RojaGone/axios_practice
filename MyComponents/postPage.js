import React, {useEffect} from 'react';
import {StyleSheet, ToastAndroid, View} from 'react-native';
import axios from 'axios';
import {TextInput, Text, Button} from 'react-native-paper';

const postPage = props => {
  const [firstName, setFirstName] = React.useState('');
  const [userId, setUserid] = React.useState('');
  const [Id, setId] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [body, setBody] = React.useState('');

  useEffect(() => {

    if (props.isEdit) {
      setId(props.id)
      setUserid(props.userId);
      setTitle(props.title);
      setBody(props.body);
    }
  }, [props.body]);

  function DeletePage1() {
    axios({
      method: 'DELETE',
      url: 'https://jsonplaceholder.typicode.com/posts/1',
    })
      .then(function (response) {
        console.log('res in delete page :' + JSON.stringify(response.data));
        {
          setId(JSON.stringify(response.data.id));
        }
        {
          setUserid(JSON.stringify(response.data.userId));
        }
        {
          setTitle(JSON.stringify(response.data.title));
        }
        {
          setBody(JSON.stringify(response.data.body));
        }
        ToastAndroid.show('Successfully deleted data', ToastAndroid.LONG);
        setId(null);
        setUserid(null);
        setTitle(null);
        setBody(null);
      })
      .catch(function (error) {
        console.log('error: ' + error);
      });
  }

  function UpdatePage1(navigation) {
    let getId = props.id;
    console.log(' getId :' + props.title);
    let cmtURL = 'https://jsonplaceholder.typicode.com/posts/' + Id;
    console.log('cmtURL :' + cmtURL);

    axios({
      method: 'PUT',
      url: cmtURL,
      data: {
        userId: userId,
        title: title,
        body: body,
      },
    })
      .then(function (response) {
        console.log('res in update page :' + JSON.stringify(response.data));
        {
          setId(response.data.id);
        }
        {
          setUserid(response.data.userId);
        }
        {
          setTitle(response.data.title);
        }
        {
          setBody(response.data.body);
        }
        ToastAndroid.show('Successfully updated data', ToastAndroid.LONG);
      })
      .catch(function (error) {
        console.log('error: ' + error);
        if (Id == '') {
          ToastAndroid.show(
            'please enter ID number under 100',
            ToastAndroid.LONG,
          );
        } else {
          ToastAndroid.show('ID number is invalid', ToastAndroid.LONG);
        }
      });
  }

  const handleOnChangeText = (text, valueFor) => {
    if (valueFor === 'userId') setUserid(text);
  };

  return (
    <View style={styles.container}>
      {    console.log("innn :"+props.id)}
      {/* {Id == '' ? (
        <Text style={styles.bg}>Id : {props.id}</Text>
      ) : (
        <Text style={styles.bg}>Id : {Id}</Text>
      )}
      {userId == '' ? (
        <Text style={styles.bg}>UserId : {props.userId}</Text>
      ) : (
        <Text style={styles.bg}>UserId : {userId}</Text>
      )}
      {title == '' ? (
        <Text style={styles.bg}>Title : {props.title}</Text>
      ) : (
        <Text style={styles.bg}>Title : {title}</Text>
      )}
      {body == '' ? (
        <Text style={styles.bg}>Body : {props.body}</Text>
      ) : (
        <Text style={styles.bg}>Body : {body}</Text>
      )} */}

      <TextInput
        style={styles.input}
        label="Id"
        mode="outlined"
        keyboardType="numeric"
        placeholder={'Enter id....'}
        value={Id}
        onChangeText={text => setId(text)}
      />

      <TextInput
        style={styles.input}
        label="UserId"
        mode="outlined"
        keyboardType="numeric"
        placeholder={'Enter UserId....'}
        value={userId}
        onChangeText={text => handleOnChangeText(text, 'userId')}
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
        placeholder={'Enter Bofdy....'}
        value={body}
        onChangeText={body => setBody(body)}
      />

      <Button
        style={styles.bg}
        icon="update"
        mode="contained"
        onPress={UpdatePage1}>
        update
      </Button>
      <Button
        style={styles.bg}
        icon="delete"
        mode="contained"
        onPress={DeletePage1}>
        Delete
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  bg: {
    color: 'black',
    marginTop: 10,
  },
  input: {
    width: '90%',
  },
  input1: {
    color: '#000000',
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 300,
    marginStart: 20,
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
});

export default postPage;
