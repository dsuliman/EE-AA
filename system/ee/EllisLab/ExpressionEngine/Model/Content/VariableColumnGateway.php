<?php
/**
 * ExpressionEngine (https://expressionengine.com)
 *
 * @link      https://expressionengine.com/
 * @copyright Copyright (c) 2003-2017, EllisLab, Inc. (https://ellislab.com)
 * @license   https://expressionengine.com/license
 */

namespace EllisLab\ExpressionEngine\Model\Content;

use EllisLab\ExpressionEngine\Service\Model\Gateway;

/**
 * Content Variable Column Gateway
 */
class VariableColumnGateway extends Gateway {

	/**
	 *
	 */
	public function getFieldList($cached = TRUE)
	{
		if ($cached && isset($this->_field_list_cache))
		{
			return $this->_field_list_cache;
		}

		$all = ee('Database')
			->newQuery()
			->list_fields($this->getTableName());

		$known = parent::getFieldList();

		return $this->_field_list_cache = array_merge($known, $all);
	}

}

// EOF
