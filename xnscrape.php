<?php

include('html.php');

$query_string = $_SERVER['QUERY_STRING'];

parse_str($query_string);

$html = file_get_html('https://www.xnxx.tv/search/'.$url);

$arr =array();

foreach($html->find('div.mozaique div.thumb-block ') as $e){

	$img_text ="data-src";	

	$result["title"] = trim($e->find('p a',0)->title);

	$result["image"] = trim($e->find('img',0)->$img_text);

	$result["link"]= 'https://www.xnxx.tv'. $e->find('a',0)->href;
	
$result["type"]="x";

 array_push($arr,$result);

}

$mar["apyar"]=$arr;

header('Content-Type: application/json');

$final = json_encode($mar,JSON_PRETTY_PRINT);

$json = str_replace(["\/"],["/"],$final);


#echo json_encode($json,JSON_PRETTY_PRINT);
echo $json;

?>
