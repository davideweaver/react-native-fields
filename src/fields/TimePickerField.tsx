import React from 'react';
import { Platform, StyleSheet } from 'react-native';

import { DatePickerComponent } from '../lib/DatePickerComponent';
import { TimePickerComponent } from '../lib/TimePickerComponent.android';

export interface ITimePickerFieldProps {
    labelStyle?: any;
    valueStyle?: any;
    valueContainerStyle?: any;
    containerStyle?: any;
}

export class TimePickerField extends React.Component<ITimePickerFieldProps> {

    public setTime(date: Date) {
        (this.refs.datePickerComponent as any).setDate(date);
    }

    public render() {

        if (Platform.OS === 'ios') {
            return (<DatePickerComponent
                {...this.props}
                mode='time'
                labelStyle={[formStyles.fieldText, this.props.labelStyle]}
                valueStyle={[formStyles.fieldValue, this.props.valueStyle]}
                valueContainerStyle={[formStyles.alignRight,
                formStyles.horizontalContainer, this.props.valueContainerStyle]}
                containerStyle={[
                    formStyles.fieldContainer,
                    formStyles.horizontalContainer,
                    this.props.containerStyle,
                ]}
            />);
        } else {
            return (<TimePickerComponent
                {...this.props}
                ref='fieldComponent'
                labelStyle={[formStyles.fieldText, this.props.labelStyle]}
                valueStyle={[formStyles.fieldValue, this.props.valueStyle]}
                valueContainerStyle={[formStyles.alignRight,
                formStyles.horizontalContainer, this.props.valueContainerStyle]}
                containerStyle={[
                    formStyles.fieldContainer,
                    formStyles.horizontalContainer,
                    this.props.containerStyle,
                ]}
            />);
        }
    }
}

const formStyles = StyleSheet.create({
    form: {

    },
    alignRight: {
        marginTop: 7, position: 'absolute', right: 10,
    },
    noBorder: {
        borderTopWidth: 0,
        borderBottomWidth: 0,
    },
    separatorContainer: {
        // borderTopColor: '#C8C7CC',
        // borderTopWidth: 1,
        paddingTop: 35,
        borderBottomColor: '#C8C7CC',
        borderBottomWidth: 1,

    },
    separator: {

        paddingLeft: 10,
        paddingRight: 10,
        color: '#6D6D72',
        paddingBottom: 7,

    },
    fieldsWrapper: {
        // borderTopColor: '#afafaf',
        // borderTopWidth: 1,
    },
    horizontalContainer: {
        flexDirection: 'row',

        justifyContent: 'flex-start',
    },
    fieldContainer: {
        borderBottomWidth: 1,
        borderBottomColor: '#C8C7CC',
        backgroundColor: 'white',
        justifyContent: 'center',
        height: 45,
    },
    fieldValue: {
        fontSize: 34 / 2,
        paddingLeft: 10,
        paddingRight: 10,
        marginRight: 10,
        paddingTop: 4,
        justifyContent: 'center',

        color: '#C7C7CC',
    },
    fieldText: {
        fontSize: 34 / 2,
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: 'center',
        lineHeight: 32,
    },
    input: {
        paddingLeft: 10,
        paddingRight: 10,

    },
    helpTextContainer: {
        marginTop: 9,
        marginBottom: 25,
        paddingLeft: 20,
        paddingRight: 20,

    },
    helpText: {
        color: '#7a7a7a',
    },
});
