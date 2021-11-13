import { useBlockProps, getColorClassName, withColors } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import Inspector from './inspector'
import { Fragment } from "react";

const edit = ( props ) => {

	const {
		attributes: {
			labelText,
			labelTextColor,
			customLabelTextColor,
			progressBarColor,
			customProgressBarColor,
			labelPosition
		}
	} = props;

	const blockProps = useBlockProps( {
		className: getColorClassName( 'color', labelTextColor ) + ' ' + getColorClassName( 'background-color', progressBarColor ),
		style    : { color: customLabelTextColor, backgroundColor: customProgressBarColor }
	} );

	return (
		<Fragment>
			<div {...blockProps} >
				Progressbar
			</div>
			<Inspector {...props} />
		</Fragment>

	);
};

export default withColors( { labelTextColor: 'color', progressBarColor: 'background-color' } )( edit )
