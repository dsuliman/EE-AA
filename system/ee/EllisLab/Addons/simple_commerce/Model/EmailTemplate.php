<?php
/**
 * ExpressionEngine (https://expressionengine.com)
 *
 * @link      https://expressionengine.com/
 * @copyright Copyright (c) 2003-2017, EllisLab, Inc. (https://ellislab.com)
 * @license   https://expressionengine.com/license
 */

namespace EllisLab\Addons\SimpleCommerce\Model;

use EllisLab\ExpressionEngine\Service\Model\Model;

/**
 * Simple Commerce Email Template Model
 */
class EmailTemplate extends Model {

	protected static $_primary_key = 'email_id';
	protected static $_table_name = 'simple_commerce_emails';

	protected static $_validation_rules = array(
		'email_name'    => 'required',
		'email_subject' => 'required',
		'email_body'    => 'required',
	);

	protected $email_id;
	protected $email_name;
	protected $email_subject;
	protected $email_body;
}

// EOF
