import { ParsedCountry } from 'react-international-phone';
import { SelectPickerOptionType } from '../SelectPicker';
import { CountrySelectProps } from './types';
export declare const getCountryOptions: (variant: CountrySelectProps["variant"]) => SelectPickerOptionType<ParsedCountry>[];
