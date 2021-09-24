<?php
/* Объявляем массив: */
$arr1 = array();
$arr2 = array();

/*Заполняем двумерный массив случайными числами: */
for ($c = 0; $c < 10; $c++){
    for ($r = 0; $r < 10; $r++){
        $arr2[$c][$r] = random_int(0, 10);
    }
}
for ($c = 0; $c < 10; $c++){
        $arr1[$c] = random_int(0, 10);
}

//Находим пересечения массивов
foreach ($arr2 as $row){
    $new_arr2[] = array_intersect($row,$arr1);
}
?>

/* Выводим исходный массив А: */
<table class="city_list">
	<?php foreach ($arr2 as $row){ ?>
	<tr>
		<?php foreach ($row as $element){ ?>
		<td><?php echo $element; ?></td>
		<?php } ?>
	</tr>
	<?php }?>
</table>

/* Выводим первой строкой массив B и далее измененный массив А: */
<table class="city_list">
    <?php foreach ($arr2 as $row=>$value){ ?>
        <tr>
            <?php foreach ($value as $element=>$Evalue){ ?>
                <td><?php
                    if($row===0){
                        echo "<b>".$arr1[$element];
                    }elseif($new_arr2[$row][$element]){
                        echo $Evalue;
                    }else{
                        echo "Нет";
                    }?></td>
            <?php } ?>
        </tr>
    <?php }?>
</table>

<style>
.city_list {
	width: 100%;
}
.city_list td {
	border: 1px solid #ddd;
	padding: 7px 10px;
}
</style>
