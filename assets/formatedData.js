import data from "./data.json";
import moment from 'moment';

const formatData = (data) => {
    const result = [];
    const { history } = data;
    history.forEach((el) => {
        result.push({
            date: moment(el.date),
            value: el.price
        })
    })
    return result;
}

export const formatedData = formatData(data);