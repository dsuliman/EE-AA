<?php
/**
 * ExpressionEngine (https://expressionengine.com)
 *
 * @link      https://expressionengine.com/
 * @copyright Copyright (c) 2003-2017, EllisLab, Inc. (https://ellislab.com)
 * @license   https://expressionengine.com/license
 */

namespace EllisLab\ExpressionEngine\Model\Addon;

use EllisLab\ExpressionEngine\Service\Model\Model;

/**
 * Fieldtype Model
 */
class Fieldtype extends Model {

	protected static $_primary_key = 'fieldtype_id';
	protected static $_table_name = 'fieldtypes';

	protected static $_typed_columns = array(
		'has_global_settings' => 'boolString',
		'settings'            => 'base64Serialized',
	);

	protected $fieldtype_id;
	protected $name;
	protected $version;
	protected $settings;
	protected $has_global_settings;

}

// EOF
