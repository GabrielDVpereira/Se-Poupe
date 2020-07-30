/* eslint-disable class-methods-use-this */
import { AsyncStorage } from 'react-native';

class Products {
  async saveProduct(product) {
    let products = await this.getProducts();
    products = [product, ...products];
    await AsyncStorage.setItem('products', JSON.stringify(products));
  }

  async getProducts() {
    let products = await AsyncStorage.getItem('products');
    products = JSON.parse(products);
    return products;
  }

  async removeProduct(productToDelete) {
    let products = this.getProducts();
    products = products.filter(product => product.id !== productToDelete.id);
    await AsyncStorage.setItem('products', products);
    return products;
  }
}

export default new Products();
