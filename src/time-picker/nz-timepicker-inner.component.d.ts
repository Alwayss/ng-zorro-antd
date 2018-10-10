import { ChangeDetectorRef, OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { NzLocaleService } from '../locale/index';
export interface TimeUnitInterface {
    index: number;
    name: string;
    disabled: boolean;
}
export declare class NzTimePickerInnerComponent implements OnInit, ControlValueAccessor {
    _cdr: ChangeDetectorRef;
    private _locale;
    private _disabled;
    private _hideDisabledOptions;
    _now: Date;
    _el: HTMLElement;
    _open: boolean;
    _hourList: TimeUnitInterface[];
    _minuteList: TimeUnitInterface[];
    _secondList: TimeUnitInterface[];
    _value: any;
    _selectedHour: number;
    _selectedMinute: number;
    _selectedSecond: number;
    _format: string;
    _showHour: boolean;
    _showMinute: boolean;
    _showSecond: boolean;
    _width: string;
    _nzDisabledHours: () => number[];
    onChange: (value: Date) => void;
    onTouched: () => void;
    _hourListInstance: any;
    _minuteListInstance: any;
    _inputTimeInstance: any;
    _secondListInstance: any;
    nzHideDisabledOptions: boolean;
    nzPlaceHolder: string;
    nzSize: 'small' | 'large' | 'default';
    nzDisabledHours: () => number[];
    nzDisabledMinutes: (hour: number) => number[];
    nzDisabledSeconds: (hour: number, minute: number) => number[];
    nzDisabled: boolean;
    nzFormat: string;
    nzValue: Date;
    _scrollToSelected(instance: HTMLElement, index: number, duration: number, unit: string): void;
    scrollTo(element: HTMLElement, to: number, duration: number): void;
    _selectHour(instance: HTMLElement, index: number, disabled: boolean): void;
    _selectMinute(instance: HTMLElement, index: number, disabled: boolean): void;
    _selectSecond(instance: HTMLElement, index: number, disabled: boolean): void;
    _translateIndex(index: number, unit: string): number;
    _calcIndex(array: number[], index: number): number;
    _initPosition(): void;
    _buildTime(): void;
    _buildHours(): void;
    _buildMinutes(): void;
    _buildSeconds(): void;
    writeValue(value: Date): void;
    registerOnChange(fn: (_: Date) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
    constructor(_cdr: ChangeDetectorRef, _locale: NzLocaleService);
    ngOnInit(): void;
}