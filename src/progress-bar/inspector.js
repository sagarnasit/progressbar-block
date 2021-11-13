import { InspectorControls, PanelColorSettings } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import {
	__experimentalRadio as Radio,
	__experimentalRadioGroup as RadioGroup,
	RangeControl,
	TextControl,
	PanelBody,
	PanelRow
} from '@wordpress/components';

export default ( props ) => {

	const {
		attributes,
		setAttributes,
		labelTextColor,
		setLabelTextColor,
		progressBarColor,
		setProgressBarColor
	} = props;

	const { labelText, labelPosition, progress } = attributes;

	return (
		<InspectorControls key="progress-bar-block">
			<PanelBody
				title={__( 'Label Settings' )}
			>
				<PanelRow>
					<TextControl
						label={__( 'Label Text' )}
						value={labelText}
						onChange={( newLabel ) => setAttributes( { labelText: newLabel } )}
					/>
				</PanelRow>
				<RadioGroup label={__( 'Label Position' )} defaultChecked="top"
				            onChange={newPosition => setAttributes( { labelPosition: newPosition } )}
				            checked={labelPosition}
				>
					<Radio value="top">{__( 'Top' )}</Radio>
					<Radio value="bottom">{__( 'Bottom' )}</Radio>
					<Radio value="inside">{__( 'Inside' )}</Radio>
				</RadioGroup>
			</PanelBody>
			<PanelBody
				title={__( 'Progress Settings' )}
			>
				<RangeControl
					label="Progress"
					value={progress}
					onChange={( newProgress ) => setAttributes( { progress: parseInt( newProgress ) } )}
					min={0}
					max={100}
					initialPosition={50}
					withInputField={true}
				/>
			</PanelBody>

			<PanelColorSettings
				title={__( 'Color settings' )}
				colorSettings={[
					{
						value   : labelTextColor.color,
						onChange: setLabelTextColor,
						label   : __( 'Label color' )
					},
					{
						value   : progressBarColor.color,
						onChange: setProgressBarColor,
						label   : __( 'Progressbar color' )
					},
				]}
			/>

		</InspectorControls>

	);
}
