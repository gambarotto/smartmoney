import React from 'react';
import { StyleSheet, View } from 'react-native'
import {useSelector} from 'react-redux'
// import { Container } from './styles';
import EntrySummaryChart from './EntrySummaryChart'
import EntrySummaryList from './EntrySummaryList'
import Container from '../Core/Container'
import useBalanceSumByCategory from '../../hooks/useBalanceSumByCategory'
export default function EntrySummary({days = 7,onPressActionButton, styleProps}) {
  
    //const totalExpenses = useSelector(state => state.totalExpenses)
    const [balaceSum] = useBalanceSumByCategory(days)

    return (
    <Container 
      title={'Categorias'} 
      actionLabelText={`Últimos ${days} dias` }
      actionButtonText='Ver mais'
      onPressActionButton={onPressActionButton}
      iconName="insert-chart"
      styleProps={styleProps}>
      <View style={styles.containerChart}>
        <EntrySummaryChart balaceSum={balaceSum} />
        <EntrySummaryList balaceSum={balaceSum}/>
      </View>
    </Container>
  );
}
 const styles = StyleSheet.create({
   containerChart: {
   //  flex:1,
     flexDirection:'row',
     paddingVertical:10
   },
 })