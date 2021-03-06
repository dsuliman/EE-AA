<?php
/**
 * ExpressionEngine (https://expressionengine.com)
 *
 * @link      https://expressionengine.com/
 * @copyright Copyright (c) 2003-2017, EllisLab, Inc. (https://ellislab.com)
 * @license   https://expressionengine.com/license
 */

/**
 * Markdown Plugin
 */
class Markdown {

	public $return_data;

	public function __construct($tagdata = '')
	{
		$tagdata       = (empty($tagdata)) ? ee()->TMPL->tagdata : $tagdata;
		$smartypants   = ee()->TMPL->fetch_param('smartypants', 'yes');
		$convert_curly = ee()->TMPL->fetch_param('convert_curly', 'yes');

		ee()->load->library('typography');
		ee()->typography->convert_curly = get_bool_from_string($convert_curly);
		$this->return_data = ee()->typography->markdown(
			$tagdata,
			compact('smartypants')
		);

		return $this->return_data;
	}
}
// END CLASS

// EOF
