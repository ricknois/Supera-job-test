import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, Picker } from 'react-native'
import api from '../../utils/api/products.json';
import { Product } from '../Product';
import { handleFilter } from '../../utils/helper';

export function Products() {
  const [data, setData] = useState<any>([]);
  const [selectedLanguage, setSelectedLanguage] = useState('Popularity');

  useEffect(() => {
    handleFilter(api, selectedLanguage, setData)
  }, [])

  const handle = async (itemValue: string) => {
    setSelectedLanguage(itemValue)
    handleFilter(api, itemValue, setData)
  }
  return (
    <View style={{flex: 1,}}>
      <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue) =>
          handle(itemValue)
        }>
        <Picker.Item label="High Price" value="High Price" />
        <Picker.Item label="Low Price" value="Low Price" />
        <Picker.Item label="Popularity" value="Popularity" />
      </Picker>
      <FlatList
        data={data}
        keyExtractor={ (item) => item.id.toString()}
        renderItem={({item}) => (
          <Product
            data={item}
          />
        )}
        numColumns={2}
      />
    </View>
  )
}
