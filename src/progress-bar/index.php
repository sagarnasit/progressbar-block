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
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}

	$script_asset = include plugin_dir_path( dirname( __FILE__, 2 ) ) . 'build/blocks.asset.php';

	wp_register_style(
		'progress-bar-block-style',
		plugins_url( 'build/style-blocks.css', dirname( __FILE__, 2 ) ),
		array(),
		$script_asset['version'],
		true
	);

	wp_register_script(
		'progress-bar-block',
		plugins_url( 'build/blocks.js', dirname( __FILE__, 2 ) ),
		$script_asset['dependencies'],
		$script_asset['version'],
		true
	);

	register_block_type(
		__DIR__,
		array(
			'attributes'    => array(
				'progress'               => array(
					'type'    => 'number',
					'default' => 50,
				),
				'labelPosition'          => array(
					'type'    => 'string',
					'default' => "top",
				),
				'labelText'              => array(
					'type' => 'string',
				),
				'progressNumberPosition' => array(
					'type'    => 'string',
					'default' => "right",
				),
			),
			'script'        => 'progress-bar-block',
			'editor_script' => 'progress-bar-block',
		)
	);

}

