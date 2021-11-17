import { useBlockProps, getColorClassName, withColors } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import Inspector from './inspector'
import { Fragment } from "react";

const edit = ( props ) => {

	const {
		attributes: {
			progress,
			labelText,
			labelTextColor,
			customLabelTextColor,
			progressBarColor,
			customProgressBarColor,
			labelPosition
		}
	} = props;

	const blockProps = useBlockProps( {
		className: getColorClassName( 'color', labelTextColor ),
		style    : { color: customLabelTextColor }
	} );

	const progressBarColorClass = getColorClassName( 'background-color', progressBarColor );
	const progressBarColorStyle = { backgroundColor: customProgressBarColor, width: `${progress}%` };

	const label = <Label className={`wp-block-sgn-progress-bar__label ${labelPosition}`} labelText={labelText} labelTextColor={labelTextColor} />;
	const progressLabel = <Label className={'progress-label'} labelText={progress} labelTextColor={labelTextColor} />;
	return (
		<Fragment>
			<div {...blockProps} >
				{'top' === labelPosition && label}
				<div className={`wp-block-sgn-progress-bar__meter`}>
					{'inside' === labelPosition && label}
					<div className={`wp-block-sgn-progress-bar__meter-progress ${progressBarColorClass}`} style={progressBarColorStyle}>
						{progressLabel}
					</div>
				</div>
				{'bottom' === labelPosition && label}
			</div>
			<Inspector {...props} />
		</Fragment>

	);
};

const Label = ( { className, labelText, labelTextColor } ) => {
	const labelColorClass = getColorClassName( 'color', labelTextColor );

	return (
		<label className={`${className} ${labelColorClass}`}>{labelText}</label>
	);
}

export default withColors( { labelTextColor: 'color', progressBarColor: 'background-color' } )( edit )
