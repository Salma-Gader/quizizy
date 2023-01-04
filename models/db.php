<?php
include('config.php');
class DB{
    protected $pdo;
    function __construct($user = DB_USER, $password = DB_PASSWORD, $host = DB_HOST, $dbname = DB_NAME)
    {

        try {
            $this->pdo = new PDO("mysql:host=$host;dbname=$dbname", $user, $password);

        } catch (PDOException $e) {
            die("ERROR: Could not connect. " . $e->getMessage());
        }
    }

    function __destruct()
    {
        if ($this->pdo !== null) {$this->pdo = null;} //return false to close the connection
    }
}
// $database = new DB();
// $conn = $database->connect();
// $result = mysqli_query($conn, "SELECT * FROM questions");
// echo $result['question'];

?>
