import React, { Component } from 'react';
import { StyleSheet, TextInputProps } from 'react-native';

import { InputComponent } from '../lib/InputComponent';
import Styles, { Color, Dims } from '../styles';

export interface IInputFieldProps extends TextInputProps {
    labelStyle?: any;
    multiline?: boolean;
    label?: string;
    style?: any;
    containerStyle?: any;
    height?: number;
}

export class InputField extends Component<IInputFieldProps> {
    protected valid: any;
    protected validationErrors: any;

    public setValue(value: string) {
        (this.refs.fieldComponent as any).setValue(value);
    }

    public focus() {
        (this.refs.fieldComponent as any).focus();
    }

    public render() {
        return (<InputComponent
            {...this.props}
            ref='fieldComponent'
            onValidation={this._handleValidation.bind(this)}
            labelStyle={[
                { color: Color.text },
                formStyles.fieldText,
                this.props.labelStyle,
            ]}
            inputStyle={[
                formStyles.input,
                (this.props.multiline) ? formStyles.multiline : {},
                (this.props.label) ? formStyles.textRight : {},
                this.props.style,
            ]}
            containerStyle={[
                {
                    borderTopColor: Color.border,
                    backgroundColor: Color.cellBackground,
                    borderTopWidth: Dims.borderWidth,
                },
                formStyles.fieldContainer,
                formStyles.horizontalContainer,
                this.props.containerStyle,
            ]}
        />);
    }

    public _handleValidation(isValid: boolean, validationErrors: any[]) {
        this.valid = isValid;
        this.validationErrors = validationErrors;
    }
}

const formStyles = StyleSheet.create({
    textRight: {
        textAlign: 'right',
    },
    multiline: {
        lineHeight: 32,
        fontSize: 34 / 2,
        paddingBottom: 10,
    },
    horizontalContainer: {
        paddingLeft: Dims.horzPadding,
        paddingRight: Dims.horzPadding,
    },
    fieldContainer: {
        justifyContent: 'center',
        flexDirection: 'row',
    },
    fieldText: {
        fontSize: 34 / 2,
        paddingLeft: 0,
        paddingRight: 10,
        marginTop: 5,
        lineHeight: 32,
        flex: 1,
    },
    input: {
        paddingLeft: 0,
        paddingRight: 0,
        fontSize: 34 / 2,
        flex: 1,
        textAlignVertical: 'top',
    },
});