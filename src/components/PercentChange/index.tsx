import React from 'react'
import { View, Text } from 'react-native'

interface PercentChangeProps {
    value: Number,
    style?: Object,
}
const Percentchange = ({ value, style = {} }: PercentChangeProps) => {
    return (
        <Text style={[style, { color: value > 0 ? '#398f0a' : '#f10000' }]} >{value > 0 ? '+' : ''}{value} %</Text>

    )
}
export default Percentchange;
