/* eslint-disable class-methods-use-this */
import { AsyncStorage } from 'react-native';
import moment from 'moment';

const LESS_THAN = -1;
const BIGGER_THAN = 1;

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

  async clearList() {
    await AsyncStorage.setItem('products', null);
  }

  filter(products, filterRules) {
    console.log(products);

    const { price, date, category } = filterRules;
    if (price) {
      products = this.mergeSort(products, price);
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

  mergeSort(products, sort) {
    if (products.length > 1) {
      const { length } = products;
      const middle = Math.floor(length / 2);
      const left = this.mergeSort(products.slice(0, middle), sort);
      const right = this.mergeSort(products.slice(middle, length), sort);
      products = this.merge(left, right, sort);
    }
    return products;
  }

  merge(left, right, sort) {
    let i = 0;
    let j = 0;
    const productsFilted = [];
    while (i < left.length && j < right.length) {
      productsFilted.push(
        this.compareMethod(left[i], right[j], sort) === LESS_THAN
          ? left[i++]
          : right[j++]
      );
    }
    return productsFilted.concat(
      i < left.length ? left.slice(i) : right.slice(j)
    );
  }

  compareMethod(a, b, sort) {
    if (a.price === b.price) {
      return 0;
    }
    if (sort === 'Decrescente') {
      return Number(a.price) > Number(b.price) ? LESS_THAN : BIGGER_THAN;
    }
    if (sort === 'Crescente')
      return Number(a.price) < Number(b.price) ? LESS_THAN : BIGGER_THAN;
  }
}

export default new Products();
