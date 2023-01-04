<?php
include('script.php');
// class questionArray extends showQuestion{
//     public function data(){
//         $row =$this->getData();
//         // var_dump($row);
//         // echo $row[0]['question'];
//         $result ="[";
//         $i=0;
//         foreach($row as $question){ 
//             $result.='
//             {
//             "question":"'.$question['question'].'",
//             "option" :[
//             {text:'.$question['optionA'].'},
//             {text:'.$question['option2'].'},
//             {text:'.$question['option3'].'},
//             {text:'.$question['option4'].'},
//             ],
//             "explication":"'.$question['explication'].'",
//         },';
//         }
//         $result.="]";
//         echo json_encode($result);
//         // return $result 
//     }

// }
// $question = new questionArray;
// $rsl = $question->data();
class ViewQuestion extends showQuestion {

    public function showAllQuestions(){
        $datas = $this->getData();
        $i = 0;
        $size =  count($datas);
        $res = "[";
        foreach($datas as $data){ 
            $res .= '
            {
                "question":"'.$data['question'].'",
                "explication":"'.$data['explication'].'",
                "options": [ 
                                { "text": "'.$data['optionA'].'", "correct": ';

            $res .=   $data['optionA'] === $data['correct'] ? 'true':'false';

            $res .=                    '},
                                { "text": "'.$data['option2'].'", "correct": ';

            $res .=   $data['option2'] === $data['correct'] ? 'true':'false';

            $res.=                '},
                                { "text": "'.$data['option3'].'", "correct": ';

                $res .=   $data['option3'] === $data['correct'] ? 'true':'false';

                $res.=                '},
                                { "text": "'.$data['option4'].'", "correct": ';
            $res .=   $data['option4'] === $data['correct'] ? 'true':'false';

            $res.=                '}
                    ]
                }
            ';

            if($i !== $size-1) $res.=',';
            $i++;

        }
        $res .= "]";

        echo  $res;
        $size = count($data);


    }
}
$questions = new ViewQuestion();
$qq =$questions ->showAllQuestions();


?>
