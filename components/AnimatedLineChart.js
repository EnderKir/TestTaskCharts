import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import * as scale from 'd3-scale';
import {formatedData} from '../assets/formatedData.js';
import {LineChart, Grid} from 'react-native-svg-charts';

const AnimatedLineChart = () => {
    const [data, setData] = useState(formatedData);
    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(100);
    const [chartData, setChartData] = useState(formatedData.slice(0, 100));
    let timerId;
    const handlePress = () => {
        timerId = setInterval(() => animation(), 40);
    }
    let array = [...chartData];
    let index = endIndex;
    const animation = () => {
        if (index === data.length - 1) {
            clearInterval(timerId);
        } else {
            array.splice(startIndex, 1);
            const newData = [...array, data[index]];
            array = newData;
            setChartData(newData);
            index++;
        }
    }
    return (
        <View>
            <LineChart
                style={{height: 200}}
                yAccessor={({item}) => item.value}
                xAccessor={({item}) => item.date}
                animate
                animationDuration={200}
                data={chartData}
                xScale={scale.scaleTime}
                svg={{stroke: 'red'}}
                contentInset={{top: 20, bottom: 20}}>
            </LineChart>
            <View>
                <Button title="Press" onPress={handlePress}/>
            </View>
        </View>
    );

}

export default AnimatedLineChart;