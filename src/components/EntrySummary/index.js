import React from 'react';
import {useSelector} from 'react-redux'
// import { Container } from './styles';
import EntrySummaryChart from './EntrySummaryChart'
import EntrySummaryList from './EntrySummaryList'
import Container from '../Core/Container'

export default function EntrySummary({onPressActionButton, navigation}) {
  
    const totalExpenses = useSelector(state => state.totalExpenses)

    return (
    <Container 
      title={'Categorias'} 
      actionLabelText='Últimos 7 dias' 
      actionButtonText='Ver mais'
      onPressActionButton={onPressActionButton}
      navigation={navigation}
      iconName="insert-chart">
        <EntrySummaryChart />
        <EntrySummaryList totalExpenses={totalExpenses}/>
    </Container>
  );
}
