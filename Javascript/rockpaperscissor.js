let a=confirm("Shall we play rock,paper or scissors?")
if(a==true)
{
    let hand=prompt("Please enter your choice");
    if(hand)
    {
        let player=hand.trim().toLowerCase();
        if(player==="rock" || player==="paper" || player==="scissor")
        {
            let computer=Math.floor(Math.random()*3+1);
            let choice=computer===1?
                        "rock"
                       :computer===2?
                        "paper"
                        :"scissor";
            let result=
                       choice===player?"Tie Game"
                       :choice==="rock" && player==="scissor"?"You Lose"
                       :choice==="paper" || player==="rock"?"You lose"
                       :player==="paper" && choice==="scissor"?"You Lose"
                       :"You Win";
            alert(result);
            let d=confirm("Want to play again");
            d?location.reload() : alert("Ok,thanks for playing");
        }
        else{
            let c=confirm("Please enter rock,paper or scissor");
            c?location.reload():alert("Ok thanks for visiting the webpage");
        }
    }
}
else{
    alert("Ok,maybe next time");
}