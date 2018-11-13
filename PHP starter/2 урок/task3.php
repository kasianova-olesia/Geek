<?php

    interface iUser 
    {
        public function __construct($name, $age);
        public function getName();
        public function getAge();
     
    }

    interface iEmployee extends iUser
    {
        function setSalary($salary);
        function getSalary();
    }
  

    class Employee implements iEmployee
    {

        function getName()
        {
            return $this->name;
        }
  
        function getAge()
        {
            return $this->age;
        }
  
        function __construct($name, $age)
        {
            $this->name = $name;
            $this->age = $age;
        }
  
        function getSalary()
        {
            return $this->salary;
        }
  
        function setSalary($salary)
        {
            $this->salary = $salary;
        }
    }

?>
