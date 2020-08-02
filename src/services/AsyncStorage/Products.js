/* eslint-disable class-methods-use-this */
import { AsyncStorage } from 'react-native';
import moment from 'moment';

class Products {
  async saveProduct(product) {
    let products = await this.getProducts();
    if (products) {
      products = [product, ...products];
    } else {
      products = [product];
    }
    await AsyncStorage.setItem('products', JSON.stringify(products));
  }

  async getProducts() {
    let products = await AsyncStorage.getItem('products');
    products = JSON.parse(products);
    return products;
  }

  async removeProduct(productToDelete) {
    let products = await this.getProducts();
    products = products.filter(product => product.id !== productToDelete.id);
    await AsyncStorage.setItem('products', JSON.stringify(products));
  }

  filter(products, filterRules) {
    const { price, date, category } = filterRules;
    if (price) {
      products = products.filter(product => product.price <= price);
    }
    if (category) {
      products = products.filter(product => product.category === category);
    }
    if (date) {
      products = products.filter(
        product => moment(product.date).format() <= moment(date).format()
      );
    }
    return products;
  }
}

export default new Products();
