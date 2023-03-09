import { InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from "react";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
	error?: string;
	icon?: ReactNode;
	label?: ReactNode | string;
}

export interface ITextAreaProps
	extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	error?: string;
	label?: ReactNode | string;
}

export interface ICheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
	error?: string;
	label?: ReactNode | string;
}

type InputOption = {
	value: string;
	label: string;
};

export interface IRadioProps extends InputHTMLAttributes<HTMLInputElement> {
	error?: string;
	label?: ReactNode | string;
	options: InputOption[];
}

export type IMultipleTag = {
	error?: string;
	label?: ReactNode | string;
	subLabel?: ReactNode | string;
	options: string[];
	value: string[];
	onChange: (val: string[]) => void;
};
