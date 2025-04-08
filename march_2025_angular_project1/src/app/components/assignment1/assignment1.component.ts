import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // ✅ Import FormsModule

@Component({
  selector: 'app-assignment1',
  imports: [FormsModule],
  templateUrl: './assignment1.component.html',
  styleUrl: './assignment1.component.css'
})
export class Assignment1Component {

  paragraphHidden = true;
  counter = 0;
  themeColor = "background-color: black;";
  textColor = "color: white;"
  inputType = "text";
  ArithmeticValue = "---Select Operation---";

  selectedStateValue = '----Select State----';

  number1=0;
  number2=0;
  result=0;

  lengthCheckInput ="";
  updatedlengthCheckInput = 100;

  previousWordLength =0;

  // element1 = document.getElementById('state') as HTMLElement;

  hidenSick()
    {
       if(this.paragraphHidden == true)
       {
        this.paragraphHidden = false;
       }
       else
       {
        this.paragraphHidden = true;
       }
    }

    inputLengthUpdator()
    {

    }

    incrementCount()
    {
      this.counter = this.counter+1;
    }

    decrement()
    {
      this.counter = this.counter-1;
    }
    reset()
    {
      this.counter = 0;
    }
    themeChange()
    {
        if(this.themeColor=="background-color: black;")
        {
          this.themeColor = "background-color: white;";
          this.textColor = "color: black;";
        }
        else
        {
          this.themeColor = "background-color: black;";
          this.textColor = "color: white;";
        }
    }

    showHide()
    {
      if(this.inputType == "text")
      {
        this.inputType = "password";
      }
      else
      {
        this.inputType = "text";
      }
    }

    selectedState() {
      alert(this.selectedStateValue);
    }

    Arithmetic()
    {
      //alert("first");
      if(this.ArithmeticValue == '+')
      {
        
         this.result = this.number1 + this.number2;
         //alert(this.result);
      }
      else if(this.ArithmeticValue == '-')
      {
           this.result = this.number1 - this.number2;
      }
      else if(this.ArithmeticValue == '*')
      {
             this.result = this.number1 * this.number2;
      }
      else if(this.ArithmeticValue == '/')
      {
             this.result = this.number1 / this.number2;
      }
      
    }

    inputLength()
    {
      //lengthCheckInput
     // alert(this.lengthCheckInput.length);
     let wordLength = this.lengthCheckInput.length;
      if(this.previousWordLength <= wordLength && this.updatedlengthCheckInput > 0)
      {
        this.updatedlengthCheckInput = 100 - wordLength;
      }
      else if(this.previousWordLength > wordLength && wordLength < 100)
      {
        this.updatedlengthCheckInput = this.updatedlengthCheckInput + (this.previousWordLength - wordLength);
        
      }
      this.previousWordLength = wordLength;
      
      //alert(this.updatedlengthCheckInput);

    }

}
