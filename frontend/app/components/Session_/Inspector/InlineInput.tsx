import React, { useEffect, useRef } from 'react';
import useInputState from 'App/hooks/useInputState';

interface Props {
	value: string;
	commit: (string) => void;
	className?: string;
}

export default function InlineInput({ value, commit, className }: Props) {
	const [ valueState, onChange ] = useInputState(value);
	//useEffect(() => setValueState(value), [ value ]);

	const inputRef = useRef<HTMLInputElement>(null);
	useEffect(() => {
		inputRef.current?.focus();
 		inputRef.current?.setSelectionRange(0, value.length);
	}, [])

	const onKeyPress = e => {
		if (e.key === 'Enter') {
			commit(valueState);
			e.target.blur();
		}
	};
	const onBlur = () => {
		commit(valueState);
	}
	return (
		<input
			value={ valueState }
			size={ valueState.length }
			onChange={ onChange }
			onKeyPress={ onKeyPress }
			onBlur={ onBlur }
			ref={ inputRef }
			className={ className }
		/>
	);
}