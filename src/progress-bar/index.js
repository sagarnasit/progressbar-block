import metadata from './block.json';
import edit from './edit';

import './style.scss';

import { registerBlockType } from '@wordpress/blocks';

import { useBlockProps } from '@wordpress/block-editor';


registerBlockType( metadata, {
	edit: edit,

	save() {
		// Rendering handled in PHP.

		const blockProps = useBlockProps.save();

		return null;
	},
} );
