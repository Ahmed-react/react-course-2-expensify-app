import moment from 'moment';
import { setStartDate, setEndDate, sortByDate, sortByAmount, setTextFilter } from '../../actions/filters';

test('should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('should generate set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

test('should setup sort by date action object', () => {
    const action = sortByDate(moment(0));
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    });
});

test('should setup sort by amount action object', () => {
    const action = sortByAmount(0);
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});

test('should setup text filter with provided values', () => {
    const text = 'Something in';
    const action = setTextFilter(text);
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    });
});

test('should setup text filter with default values', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});