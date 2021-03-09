import React from 'react';
import { Bookmark } from './Bookmark';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';


export default function BookmarksLayout({bookmark: bookmark, navigation}: any): JSX.Element{
    return(
        <View
        style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
          }}>
            <Text>
                Name: {bookmark.name}                                                    {bookmark.id}
            </Text>
            <Text>
                Description: {bookmark.description}
            </Text>
            <Text>
                URL: {bookmark.url}
            </Text>
            <Text>
                Type: {bookmark.type}
            </Text>
            <Text>
                Rating: {bookmark.rating}
            </Text>
            <Button
                title="Delete"
                onPress={()=>navigation.reset({
                    index: 0,
                    routes: [
                      {
                        name: 'Delete',
                        params: {bookmark: bookmark}
                      },
                    ],
                  })
                } />
            <Button
                title="Update"
                onPress={()=>navigation.reset({
                    index: 0,
                    routes: [
                      {
                        name: 'Update',
                        params: {bookmark: bookmark}
                      },
                    ],
                  })
                } />
        </View>
    )
}
