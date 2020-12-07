import React, { useState, useContext, useRef } from 'react';

import ModalAnimated from '../ModalAnimated';
import PriceRangeSelector from './PriceRangeSelector';
import Picker from '../../Picker';
import categories from '../../../utils/categories';
import Buttom from '../../Buttom';
import {
  Title,
  Container,
  Form,
  BtnView,
  BtnApplyView,
  BtnClearView,
} from './styles';
import DatePicker from '../../DatePicker';
import { SpendContext } from '../../../contexts/SpendContext';

const categoryNames = Object.keys(categories);

export default function({ visible, setVisible }) {
  const [filterByCategory, setFilterByCategory] = useState(null);
  const [filterByDate, setFilterByDate] = useState(null);
  const [filterByPrice, setFilterByPrice] = useState(null);
  const [modalContentControl, setModalContent] = useState(true);
  const { productStateManager } = useContext(SpendContext);
  const animationStatus = useRef();

  async function applyFilter() {
    await productStateManager.filterProducts(
      filterByPrice,
      filterByCategory,
      filterByDate
    );
    setVisible(false);
  }
  function clearFilterInfo() {
    // Toggle the modalRenderControl value will make the components PriceRangeSelector, DatePicker and so on reset their values
    setModalContent(false);
    setModalContent(true);
  }

  async function clearFilter() {
    setVisible(false);
    if (animationStatus.current === 'inactive') {
      await productStateManager.clearFilter();
      setFilterByCategory(null);
      setFilterByDate(null);
      setFilterByPrice(null);
      clearFilterInfo();
    }
  }

  const renderClearFilterButton = () => {
    if (filterByCategory || filterByDate || filterByPrice) {
      return (
        <BtnClearView>
          <Buttom type="danger" text="Limpar" onPress={clearFilter} />
        </BtnClearView>
      );
    }
  };

  return (
    <ModalAnimated
      visible={visible}
      setVisible={setVisible}
      onAnimationChange={animationChange => {
        animationStatus.current = animationChange;
      }}
    >
      {modalContentControl && (
        <Container>
          <Title>Filtrar</Title>
          {/* <PriceRangeSelector onChange={price => setFilterByPrice(price)} /> */}
          <Form>
            <Picker
              label="Preço"
              items={['Crescente', 'Decrescente']}
              onChange={price => setFilterByPrice(price)}
            />
            <Picker
              label="Categoria"
              items={categoryNames}
              onChange={category => setFilterByCategory(category)}
            />
            <DatePicker onChange={date => setFilterByDate(date)} />
          </Form>
          <BtnView>
            <BtnApplyView>
              <Buttom text="Aplicar" onPress={applyFilter} />
            </BtnApplyView>
            {renderClearFilterButton()}
          </BtnView>
        </Container>
      )}
    </ModalAnimated>
  );
}
