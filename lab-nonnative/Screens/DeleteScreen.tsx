import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Bookmark } from '../Model/Bookmark';
import { deleteServer } from '../Repository';

export default function DeleteScreen({route, navigation }: any): JSX.Element {
  const {bookmark} = route.params;

  return (
    <View>
      <Text>Are you sure you want to delete {bookmark.name}({bookmark.description})?</Text>
      <Button
        title="Cancel"
        onPress={() => {
          navigation.reset({
            index: 0,
            routes: [
              {
                name: 'ReadAll',

              },
            ],
          })
        }} />
        <Button
        title="Delete"
        onPress={async() => {
          {
            await
            deleteServer(bookmark.id)}
          navigation.reset({
            index: 0,
            routes: [
              {
                name: 'ReadAll',

              },
            ],
          })
        }} />
    </View>
  );
}
