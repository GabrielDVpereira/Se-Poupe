import {
  AntDesign,
  Entypo,
  SimpleLineIcons,
  MaterialCommunityIcons,
  FontAwesome5,
  FontAwesome,
  Ionicons,
} from '@expo/vector-icons';

const IconColor = '#FF1313';
const IconSize = 40;

const categories = {
  Mercado: {
    Icon: AntDesign,
    IconName: 'shoppingcart',
    IconColor,
    IconSize,
  },
  Moradia: {
    Icon: AntDesign,
    IconName: 'home',
    IconColor,
    IconSize,
  },
  Educação: {
    Icon: Entypo,
    IconName: 'open-book',
    IconColor,
    IconSize,
  },
  Viagem: {
    Icon: SimpleLineIcons,
    IconName: 'plane',
    IconColor,
    IconSize,
  },
  Compras: {
    Icon: MaterialCommunityIcons,
    IconName: 'tshirt-crew-outline',
    IconColor,
    IconSize,
  },
  Restaurantes: {
    Icon: MaterialCommunityIcons,
    IconName: 'food',
    IconColor,
    IconSize,
  },
  Contas: {
    Icon: FontAwesome5,
    IconName: 'money-bill-alt',
    IconColor,
    IconSize,
  },
  Transporte: {
    Icon: Ionicons,
    IconName: 'md-car',
    IconColor,
    IconSize,
  },
  Saude: {
    Icon: AntDesign,
    IconName: 'medicinebox',
    IconColor,
    IconSize,
  },
  Lazer: {
    Icon: FontAwesome,
    IconName: 'soccer-ball-o',
    IconColor,
    IconSize,
  },
  Outro: {
    Icon: AntDesign,
    IconName: 'questioncircleo',
    IconColor,
    IconSize,
  },
};

export default categories;
