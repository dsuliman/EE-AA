<?php
/**
 * ExpressionEngine (https://expressionengine.com)
 *
 * @link      https://expressionengine.com/
 * @copyright Copyright (c) 2003-2017, EllisLab, Inc. (https://ellislab.com)
 * @license   https://expressionengine.com/license
 */

namespace EllisLab\ExpressionEngine\Service\Validation\Rule;

use EllisLab\ExpressionEngine\Service\Validation\ValidationRule;

/**
 * Non-zero Natural Number Validation Rule
 */
class IsNaturalNoZero extends ValidationRule {

	public function validate($key, $value)
	{
		if ( ! preg_match('/^[0-9]+$/', $value))
		{
			return FALSE;
		}

		return ($value > 0);
	}

	public function getLanguageKey()
	{
		return 'is_natural_no_zero';
	}

}

// EOF
