/*### For single question we need the following data and methods:
- Data:
  - `title` (title of the question)
  - `options` (array of options)
  - `correctAnswerIndex` (index of the correct option)
- Methods:
  - `isAnswerCorrect` (will accept the index and returns `true` or `false` based on the answer is correct or not)
  - `getCorrectAnswer` (will return the correct answer of the quiz when the function is called)
### Create the object using the following ways
For each different ways of creating object write different solutions.
- Prototypal pattern of object creation (Put methods inside an object and create object using Object.create)
- Pseudoclassical Pattern (Put methods inside F.prototype and use `new` to call function)
- Create using class
- Write test by creating two objects also test both methods.*/


//Prototyple pattern
let questionMethods={

    isAnswerCorrect:function(index){
       return index===this.correctAnswerIndex;
    },
    getCorrectAnswer:function(){
       return this.options[this.correctAnswerIndex];
    }
}
}
function createques(title,options,correctAnswerIndex){

    let ques=Object.create(quesMethods);
    ques.title=title;
    ques.options=options;
    ques.correctAnswerIndex=correctAnswerIndex;



    return ques;
}

//Pseudoclassical Pattern


function question (title,options,correctAnswerIndex){

 
    this.title=title;
    this.options=options;
    this.correctAnswerIndex=correctAnswerIndex;




}
 question.prototype={
        isAnswerCorrect:function(index){
            return index===this.correctAnswerIndex;
       },
        getCorrectAnswer:function(){
            return this.options[this.correctAnswerIndex];
        }
    }

}

//class pattern
class question{


   constructor(title,options,correctAnswerIndex){

 
       this.title=title;
       this.options=options;
       this.correctAnswerIndex=correctAnswerIndex;
   }
   isAnswerCorrect(index){
       return index===this.correctAnswerIndex;
   }
   getCorrectAnswer(){
       return this.options[this.correctAnswerIndex];
   }


}


let firstquestion = new question(
   'Where is the capital of Jordan',
   ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
   1
 );
 let secondquestion =  new question(
   'Where is the capital of Jamaica',
   ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
   2
 );
