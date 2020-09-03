import React from 'react';
import classNames from 'classnames';
import JDlabel from '../label/JDLabel';
import s4 from '../../utils/keyGen';
import Tooltip from '../tooltip/Tooltip';
import { JDatomExtentionSet, JDinputExtention } from '../../types/interface';
import { JDatomClasses } from '../../utils/autoClasses';

interface IProps extends JDatomExtentionSet, JDinputExtention {
	disabled?: boolean;
	checked?: boolean;
	onChange?(foo: boolean): void;
	label?: string | JSX.Element;
	ltxt?: string;
	rtxt?: string;
	tooltip?: string;
	id?: string;
	className?: string;
}

const JDswitch: React.FC<IProps> = ({
	disabled,
	checked = false,
	onChange,
	ltxt,
	tooltip,
	rtxt,
	label,
	require,
	className,
	...props
}) => {
	const handleCheckboxChange = () => {
		const flag = disabled ? checked : !checked;
		onChange && onChange(flag);
	};

	const classes = classNames(className, undefined, {
		JDswitch__input: true
	});

	const newId = s4();

	const wrapClasses = classNames('JDswitch-wrap', undefined, {
		...JDatomClasses(props)
	});

	return (
		<span
			{...props}
			className={'JDswitch-wrapWrap'}
			data-tip={tooltip}
			data-for={tooltip ? `btnTooltip${newId}` : undefined}
		>
			<span className={wrapClasses}>
				{label && <JDlabel require={require} txt={label} />}
				<span
					tabIndex={0}
					className="JDswitch"
					role="button"
					onKeyPress={handleCheckboxChange}
					onClick={handleCheckboxChange}
				>
					<label htmlFor="JDswitch">
						{ltxt && <span className="JDswitch__ltxt">{ltxt}</span>}
						<input
							onChange={() => {}}
							checked={checked}
							className={classes}
							disabled={disabled}
							type="checkbox"
						/>
						<span className="JDswitch__lever" />
						{rtxt && <span className="JDswitch__rtxt">{rtxt}</span>}
					</label>
				</span>
				{tooltip && (
					<Tooltip type="dark" effect="solid" id={`btnTooltip${newId}`}>
						<span>{tooltip}</span>
					</Tooltip>
				)}
			</span>
		</span>
	);
};

export default JDswitch;
