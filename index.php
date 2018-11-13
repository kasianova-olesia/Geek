<?php header('Content-type: text/html; charset=utf-8'); ?>

<?
echo "<b>Задача №1</b> -  Сделайте класс Students (студенты), в котором будут следующие свойства - name (имя), age (возраст), salary (стипендия).<br> 
      <b>Задача №2</b> -  Создайте объект класса Students, затем установите его свойства в следующие значения - имя 'Anton', возраст 25, стипендия 1100.<br>
      <b>Задача №3</b> -  Создайте второй объект класса Students, установите его свойства в следующие значения - имя 'Oleg', возраст 26, стипендия 2200.<br>
      <b>Задача №4</b> -  Вывести на экран сумму стипендий Anton и Oleg<br>
      <b>Задача №4</b> -  Вывести сумму их возрастов 
</br></br>";

class Students
{
	public $name;
	public $age;
	public $salary;
}
$student1 = new Students();
$student1->name = "Anton";
$student1->age = "25"; 
$student1->salary = "1100"; 

$student2 = new Students();
$student2->name = "Oleg";
$student2->age = "26"; 
$student2->salary = "2200";


echo "Сумма стипендий Anton и Oleg: ".($student1->salary+$student2->salary)."</br>";
echo "Сумма возрастов: ".($student1->age+$student2->age)."</br>";
echo "</br><hr>";
?>