<?php
$correct = 0;
$choice = [$_POST["q1"], $_POST["q2"], $_POST["q3"], $_POST["q4"], $_POST["q5"]];
$answer = ["red,blue,yellow", 20, "N", "Pacific and Atlantic", "Automobile"];
$question = ["What are the primary colors?", "What does (7 + 3 * 4) + 1 = ?", "What is the most comment element in the air?", "Which two oceans border the United States?", "Which 10 letter word starts with gas?"];

for ($i=0; $i < count($choice); $i++) {
    if ($choice[$i] == $answer[$i]) {
        $correct = $correct + 1;
    }

    echo "<p>Question " . ($i+1) . ": " . $question[$i] . "<br>";
    echo "Your answer: " . $choice[$i] . "<br>";
    echo "Correct answer: " . $answer[$i] . "</p>";

}
echo "<p>You answered " . $correct . " questions correct. (Score: " . 100*$correct/count($choice) . "%)</p>";

?>
