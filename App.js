import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import ProductList from './src/components/Product/ProductList';
import SearchBar from './src/components/SearchBar/SearchBar';
import { useState } from 'react';
import products_data from "./src/data/products_data.json"

export default function App() {
  const [products, setProducts] = useState(products_data);
  
  const renderProducts = ({ item }) => <ProductList product={item} />

  const handleSearch = (text) => {
    const filteredList = products_data.filter(product => {
      const searchedText = text.toLowerCase()
      const currentTitle = product.title.toLowerCase()

      return currentTitle.indexOf(searchedText) > -1
    })
    setProducts(filteredList)
  }
  //  console.log(products);
  return (
    <View style={styles.container}>
      <SearchBar onChange={handleSearch} />
      <StatusBar style="auto" />
      <FlatList data={products} renderItem={renderProducts} numColumns={2}></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin:15,
    marginTop:50
  },
});
