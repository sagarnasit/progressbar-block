import metadata from './block.json';
import edit from './edit';
import save from './save';
import './style.scss';

import { registerBlockType } from '@wordpress/blocks';

registerBlockType( metadata, {
	edit: edit,
	save: save,
} );
