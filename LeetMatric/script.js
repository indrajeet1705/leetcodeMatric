document.addEventListener('DOMContentLoaded',function (){
 

  const searchButton=document.getElementById('search-button');
  const userId=document.getElementById('user-id');
  const statContainer=document.querySelector('.stats-container');
  const easyProgress=document.querySelector('.easy-progress');
  const mediumProgress=document.querySelector('.medium-progress');
  const hardProgress=document.querySelector('.hard-progress');
  const easyLabel=document.getElementById('easy-label');
  const mediumLabel=document.getElementById('medium-label');
const hardLabel=document.getElementById('hard-label');
 const card1=document.querySelector('.card1'); 
  const card2=document.querySelector('.card2');
  const card3=document.querySelector('.card3');
  const card4=document.querySelector('.card4');



function validateUsername(username){
  if(username.trim()===''){
    alert('Plese enter a Username');
  }else{
const regex=/^[a-zA-Z][a-zA-Z0-9_]{3,19}$/;
let isMatching =regex.test(username);
if(!isMatching){
   alert('Invalid Username');
}
  
return isMatching;
  }
}


async function fetchData(username){

const url=`https://leetcode-stats-api.herokuapp.com/${username}`;


try{
 searchButton.textContent='Searching...';
  searchButton.disabled=true;
const response=await fetch(url);
if(response.ok){
 
  const data =await response.json();
  console.log(data);
  if(data.status!=='success'){
    alert ('User Not Found');
  }
  else{
  displayData(data);
  }

}


}
catch(error){
  statContainer.innerHTML=`<h1>SORRY!! Error Occured</h1>`;


}
finally{
  searchButton.textContent="Search";
  searchButton.disabled=false;
}



}

 function changeStats(circle,percentage,Qtotal,Qsolved,label){
  circle.style.setProperty('--progress-degree',`${percentage}%`);
  label.textContent=`${Qsolved}/${Qtotal}`;
 }
function changeCard(acceptancrRate,contributionPoints,ranking,totalProblems){
    card1.textContent=`Acceptance Rate: ${acceptancrRate}`;
    card2.textContent=`Contribution Points: ${contributionPoints}`;
    card3.textContent=`Ranking: ${ranking}`;
    card4.textContent=`Total Solved Problems: ${totalProblems}`;
}

function displayData(data){
  const totalSolved=data.totalSolved;
 
  const totalHard=data.totalHard;
  const totalMedium=data.totalMedium;
  const totalEasy=data.totalEasy;

  const easySloved =data.easySolved;
   const mediumSolved=data.mediumSolved;
   const hardSolved=data.hardSolved;
   const easyPercentage=(easySloved/totalEasy)*100;
   const mediumPercentage=(mediumSolved/totalMedium)*100;
   const hardPercentage=(hardSolved/totalHard)*100;

   changeStats(easyProgress,easyPercentage,totalEasy,easySloved,easyLabel);
    changeStats(mediumProgress,mediumPercentage,totalMedium,mediumSolved,mediumLabel);
    changeStats(hardProgress,hardPercentage,totalHard,hardSolved,hardLabel);


    const acceptancrRate =data.acceptanceRate;
    const contributionPoints=data.contributionPoints;
    const ranking=data.ranking; 
    changeCard(acceptancrRate,contributionPoints,ranking,totalSolved);
}



  searchButton.addEventListener('click',()=>{
    const username=userId.value;
    console.log('userName: ',username);
    let ans=validateUsername(username);
    if(ans){
     fetchData(username);
    }
    userId.value='';
  })


});