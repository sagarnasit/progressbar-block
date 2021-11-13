import { useBlockProps, getColorClassName } from '@wordpress/block-editor';

export default ( props ) => {
	const { attributes, setAttributes } = props;
	const { labelTextColor, customLabelTextColor, progressBarColor, customProgressBarColor } = attributes;

	const blockProps = useBlockProps.save( {
		className: getColorClassName( 'color', labelTextColor ) + ' ' + getColorClassName( 'background-color', progressBarColor ),
		style    : { color: customLabelTextColor, backgroundColor: customProgressBarColor }
	} );

	return (
		<div {...blockProps}>
			Progress
		</div>
	);

}
