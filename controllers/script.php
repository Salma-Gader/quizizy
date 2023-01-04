<?php
require dirname(__DIR__) . '/models/db.php';
class showQuestion extends DB{
    protected function getData()
    {
        try {
            $sql = "SELECT * FROM questions";
            $stm = $this->pdo->prepare($sql);
            $stm->execute();
            return $stm->fetchAll(PDO::FETCH_ASSOC);
            // return var_dump($result);
        } catch (PDOException $e) {
            "Erreur" . $e->getMessage();
        }
    
    }
}
// $data = new showQuestion;
//  $row = $data->getData();
// var_dump($row["question"]);
?>