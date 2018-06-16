import React from 'react';
import styled from 'styled-components';

const StoreCardWrapper = styled.div`
  margin-bottom: 48px;
`
const Link = styled.a`
  display: block;
  text-decoration: inherit;
  color: inherit;
`
const Image = styled.img`
  width: 100%;
  border-radius: 16px;
`
const Title = styled.h2`
  margin: 6px 0;
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  text-align: left;
  color: #333333;
`
const Text = styled.p`
  margin: 6px 0 0 0;
`
const OrderInfo = styled.p`
  margin: 6px 0;
  font-size: 16px;
  line-height: 22px;
`
const MinPrice = styled.span`
  font-weight: bold;
`
const DeliveryInfo = styled.p`
  margin: 0 0 6px 0;
  font-weight: bold;
`
const StoreCard = ({store}) => ( 
  <StoreCardWrapper>
    <Link href={store.link}>
      <Image src={store.heroImageUrl} />
      <Title>{store.title}</Title>
      <OrderInfo>{store.priceBucket}</OrderInfo>
      <Text>Доставка</Text>
      <DeliveryInfo>{store.etaRange.min}-{store.etaRange.max} минут</DeliveryInfo>
    </Link>
  </StoreCardWrapper>
);
export default StoreCard;