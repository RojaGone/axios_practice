import React from "react";
import { Text,StyleSheet } from "react-native";
import axios from "axios";

const DeletePage = () => {

    axios({
        method: 'DELETE',
        url: 'https://jsonplaceholder.typicode.com/posts/1',
        
    }).then(function(response){
        console.log("res in delete page :"+JSON.stringify(response.data));
    }).catch(function(error){
        console.log("error: "+error);
    })
    

    return(
        <Text style={styles.bg}>delete page </Text>
    )
}

const styles = StyleSheet.create({
    bg:{
        color: 'black'
    }
})

export default DeletePage;