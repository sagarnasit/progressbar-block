<?php
/**
 * Registration and rendering for the Smugmug Image block.
 *
 * @package progress-bar-block
 */

namespace ProgressBarBlock;

add_action( 'init', __NAMESPACE__ . '\register' );

/**
 * Registers the post chooser block.
 *
 * @since 0.1.0
 */
function register() {
	if ( ! function_exists( 'register_block_type_from_metadata' ) ) {
		return;
	}

	$script_asset = include plugin_dir_path( dirname( __FILE__, 1 ) ) . 'build/index.asset.php';

	wp_register_style(
		'progress-bar-block-style',
		plugins_url( 'build/style-index.css', dirname( __FILE__, 1 ) ),
		array(),
		$script_asset['version'],
		true
	);

	wp_register_script(
		'progress-bar-block-script',
		plugins_url( 'build/index.js', dirname( __FILE__, 1 ) ),
		$script_asset['dependencies'],
		$script_asset['version'],
		true
	);

	register_block_type_from_metadata(
		__DIR__ . '/block.json'
	);

}

