/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './MyComponents/Home';
import PostPage from './MyComponents/postPage';
import UpdatePage from './MyComponents/UpdatePage';
import GetPage from './MyComponents/GetPage';
import DeletePage from './MyComponents/DeletePage';
import axios from 'axios';
import Getpage from './MyComponents/GetPage';

function HomeScreen(navigation) {
  return (
    // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //   <Text>Home Screen</Text>
    // </View>
    <Home nav={navigation} />
  );
}

function postPage1({route,navigation}) {
  const { userIdRev ,titleRev, bodyRev, isEdit} = route.params;
  const [userId, setUserid] = React.useState('');
  const [Id, setId] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [body, setBody] = React.useState('');

  console.log("jsdsjh :"+title);
  // setTitle(titleRev);

  axios({
    method: 'POST',
    url: 'https://jsonplaceholder.typicode.com/posts',
    data: {
      userId: userIdRev,
      title: titleRev,
      body: bodyRev,
    },
  })
    .then(function (response) {

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
    })
    .catch(function (error) {
      console.log('error: ' + error);
    });

  return (
    <PostPage
      nav={navigation}
      title={title}
      body={body}
      id={Id}
      userId={userId}
      isEdit= {isEdit}
    />
  );
}

function GetPage1(navigation) {
  const [data, setData] = React.useState([]);

  axios({
    method: 'GET',
    url: 'https://jsonplaceholder.typicode.com/posts',
  })
    .then(function (response) {
      setData(response.data);
    })
    .catch(function (error) {
      console.error('error: ' + error);
    });
  if (data && data.length > 0) {
    return <GetPage data={data} nav={navigation} />;
  } else {
    return <Text>no records</Text>;
  }
}

function DeletePage1(navigation) {
  return <PostPage />;
}

function UpdatePage1({route,navigation}){
  const { IdRev, userIdRev ,titleRev, bodyRev, isEdit} = route.params;
  const [userId, setUserid] = React.useState('');
  const [Id, setId] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [body, setBody] = React.useState('');

  console.log("jsdsjh :"+IdRev);
  // setTitle(titleRev);

 

  axios({
    method: 'PUT',
    url: 'https://jsonplaceholder.typicode.com/posts/'+IdRev,
    data:{
        userId: userIdRev,
        title: titleRev,
        body: bodyRev
    }
}).then(function(response){
    console.log("res in update page :"+JSON.stringify(response.data));
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
}).catch(function(error){
    console.log("error: "+error);
})

  return (
    <UpdatePage
      nav={navigation}
      title={title}
      body={body}
      id={Id}
      userId={userId}
      isEdit= {isEdit}
    />
  );
}

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="postPage" component={postPage1} />
        <Stack.Screen name="UpdatePage" component={UpdatePage1} />
        <Stack.Screen name="GetPage" component={GetPage1} />
        {/* <Stack.Screen name="DeletePage" component={DeletePage1} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
