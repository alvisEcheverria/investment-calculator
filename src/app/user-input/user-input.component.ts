import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})

export class UserInputComponent {

  @Output() calculate = new EventEmitter<{
    initialInvestment: number
    annualInvestment: number
    expectedReturn: number
    duration: number
  }>();

  enteredInitialInvestment = "0"
  enteredAnnualInvestment = "0"
  enteredExpectedReturn = "0"
  enteredDuration = "10"

  onSubmit(){
    console.log(
      this.calculate.emit(
        {
          initialInvestment: Number(this.enteredInitialInvestment),
          annualInvestment: Number(this.enteredAnnualInvestment),
          expectedReturn: Number(this.enteredExpectedReturn),
          duration: Number(this.enteredDuration)
        }
      )
    )
  }
}
