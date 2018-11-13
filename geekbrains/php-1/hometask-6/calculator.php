<?php



if ($_SERVER['REQUEST_METHOD'] == "POST") {
    $number1 = $_POST['number1'];
    $number2 = $_POST['number2'];
    $operation = $_POST['operation'];
    $reset = $_POST['reset'];

    if ($reset) {
        $view = "";
        $number1 = 0;
        $number2 = 0;
        $operation = false;
        $view = "";
    }

    if ($operation) {
        if ($operation == "+") {
            $result = $number1 + $number2;
        }
        if ($operation == "-") {
            $result = $number1 - $number2;
        }
        if ($operation == "*") {
            $result = $number1 * $number2;
        }
        if ($operation == "/") {
            $result = ($number2 != 0) ? $number1 / $number2 : "Infinity";
        }
        $view = "$number1 $operation $number2 = " . $result;
    }

}

?>

<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="utf-8">
    <title>Calculator</title>
</head>

<body style="width:50%; margin:0 auto;">
<h2>Basic Calculator</h2>

<hr>

<form action="" method="post">
    <input name="number1" type="text" value="<?= $number1 ?>"><br><br>
    <input name="number2" type="text" value="<?= $number2 ?>"><br><br>
    <input name="result" type="text" value="<?= $view ?>" disabled/><br><br>

    <select name="operation" onchange="submit()">
        <option value="">Select operation</option>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
    </select><br><br>

    <input name="operation" value="+" type="submit"/>
    <input name="operation" value="-" type="submit"/>
    <input name="operation" value="*" type="submit"/>
    <input name="operation" value="/" type="submit"/>
    <input name="reset" value="Reset" type="submit"/>
</form>

</body>
</html>