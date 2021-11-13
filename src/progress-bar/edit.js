import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import Inspector from './inspector'

export default ( props ) => {

	const blockProps = useBlockProps( {} );

	const { attributes: { labelText, labelPosition } } = props;

	return (
		<div {...blockProps} >
			<div className="progress-bar__container">
				<h1>Container</h1>
			</div>
			<Inspector {...props} />
		</div>
	);
};
