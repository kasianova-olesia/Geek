<?php

interface iUser
{
    public function setName($name); // установить имя
    public function getName(); // получить имя
    public function setAge($age); // установить возраст
    public function getAge(); // получить возраст
}

class Students implements iUser
{
    // устанавливаем имя
    public function setName($name) 
    {
        $this->name = $name;
    }
    
    // получаем имя
    public function getName() 
    {
        return $this->name;
    }
    
    // устанавливаем возраст
    public function setAge($age) 
    {
        $this->age = $age;
    }
    
    // получаем возраст
    public function getAge() 
    {
        return $this->age;
    }
    protected $age;
    protected $name;
}
$student = new Students();
$student->setAge(37);
$student->setName('Вася Пупкин');

?>