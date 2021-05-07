<?php

  /* https://api.telegram.org/bot1806050129:AAHBJ8Np5OupbAE5O0F8SgsLvuS7yQ6YPn4/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$noNote = false;

$type = $_POST['type'] ? $_POST['type'] : $noNote;
$typeComponent = $_POST['type-component-1'] ? $_POST['type-component-1'] : $noNote;
$typeComponent = $_POST['type-component-2'] ? $_POST['type-component-2'] : $noNote;
$typeComponent = $_POST['type-component-3'] ? $_POST['type-component-3'] : $noNote;

$token = "1806050129:AAHBJ8Np5OupbAE5O0F8SgsLvuS7yQ6YPn4";
$chat_id = "411077009";
$arr = array(
  'Тип изделия: ' => $type,
  'Тип комплектующего: ' => $typeComponent
);

foreach($arr as $key => $value) {
    if ($value) {
      $txt .= "<b>".$key."</b> ".$value."%0A";
    }
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

?>