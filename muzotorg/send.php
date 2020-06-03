<?php

$data = $_POST;
if (!isset($data)) exit;

$name = $_POST['name'];
$phone = $_POST['phone'];

if (empty($name) || empty($phone)) exit;

$message = sprintf("Заявка с сайта\r\nимя: %s\r\nтелефон: %s", $name, $phone);

@send('psh_', 'hello@pavit.ru', 'заявка с сайта', $message);
exit;

function send($from, $to, $subject, $body) {
	$rn = "\r\n";
	$header  = 'X-Mailer: PAVIT Mail Machine' . $rn;
	$header .= 'MIME-Version: 1.0' . $rn;
	$header .= 'Content-type: text/plain; charset=UTF-8' . $rn;
	$header .= sprintf('From: %s', $from) . $rn;
	$header .= sprintf('Subject: %s', $subject) . $rn;

	@mail($to, $subject, $body, $header);
}
?>