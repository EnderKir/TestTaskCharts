import React from 'react';
import {View, Text, Button} from 'react-native';
import * as scale from 'd3-scale';
import {formatedData} from '../assets/formatedData.js';
import {LineChart, Grid, YAxis, XAxis} from 'react-native-svg-charts';
import moment from "moment";

const verticalContentInset = {top: 40, bottom: 40};
const xAxisHeight = 30;

const StaticLineChart = () => {
    return (
        <View style={{ height: 250, padding: 0, width: "90%", flexDirection: "row" }}>
            <YAxis
                style={{marginBottom: xAxisHeight}}
                data={formatedData}
                contentInset={verticalContentInset}
                yAccessor={({item}) => item.value}
                svg={{
                    fill: "black"
                }}
                numberOfTicks={5}
                formatLabel={value => value}
            />
            <View style={{ flex: 1, marginLeft: 10 }}>
                <LineChart
                    style={{ flex: 1 }}
                    yAccessor={({item}) => item.value}
                    xAccessor={({item}) => item.date}
                    data={formatedData}
                    xScale={scale.scaleTime}
                    svg={{stroke: 'red'}}
                    contentInset={verticalContentInset}>
                    <Grid/>
                </LineChart>
                <XAxis
                    data={formatedData}
                    svg={{
                        fill: "black",
                        fontSize: 8,
                        fontWeight: "bold",
                        rotation: 35,
                        originY: 30,
                        y: 7,
                    }}
                    xAccessor={({item}) => item.date}
                    scale={scale.scaleTime}
                    numberOfTicks={10}
                    style={{marginHorizontal: -20, height: xAxisHeight}}
                    contentInset={verticalContentInset}
                    formatLabel={date => moment(date).format("YYYY-MM-DD")}/>
            </View>
        </View>
    );
}

export default StaticLineChart;

