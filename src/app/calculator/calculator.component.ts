import { Component } from '@angular/core';
import { CalculatorService } from './calculator.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calculator',
  standalone: true,
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
  imports: [CommonModule]
})
export class CalculatorComponent {
  displayValue: string = '';
  currentOperation: string = '';
  firstOperand: number | null = null;
  waitingForSecondOperand: boolean = false;
  squareRoot: number | null = null;
  randomString: string = '';

  constructor(private calculatorService: CalculatorService) { }

  appendNumber(number: string) {
    if (this.waitingForSecondOperand) {
      this.displayValue = number;
      this.waitingForSecondOperand = false;
    } else {
      this.displayValue = this.displayValue === '' ? number : this.displayValue + number;
    }
  }

  appendDecimal() {
    if (this.waitingForSecondOperand) {
      this.displayValue = '0.';
      this.waitingForSecondOperand = false;
    } else if (!this.displayValue.includes('.')) {
      this.displayValue += '.';
    }
  }

  setOperation(operation: string) {
    if (this.currentOperation && this.waitingForSecondOperand) {
      this.currentOperation = operation;
      return;
    }

    if (this.firstOperand === null) {
      this.firstOperand = parseFloat(this.displayValue);
    } else if (this.currentOperation) {
      this.performCalculation(this.firstOperand, parseFloat(this.displayValue));
    }

    this.currentOperation = operation;
    this.waitingForSecondOperand = true;
  }

  performCalculation(firstOperand: number, secondOperand: number): void {
    switch (this.currentOperation) {
      case '+':
        this.calculatorFromApi('addition', firstOperand, secondOperand);
        break;
      case '-':
        this.calculatorFromApi('subtraction', firstOperand, secondOperand);
        break;
      case '*':
        this.calculatorFromApi('multiplication', firstOperand, secondOperand);
        break;
      case '/':
        this.calculatorFromApi('division', firstOperand, secondOperand);
        break;
      case 'random':
        this.calculatorFromApi('division', firstOperand, secondOperand);                
        break;
      default:
        console.error('Operação não reconhecida');
    }
  }

  calculateResult() {
    if (this.currentOperation && this.firstOperand !== null) {
      this.performCalculation(this.firstOperand, parseFloat(this.displayValue));
      this.currentOperation = '';
      this.firstOperand = null;
    }
  }

  clear() {
    this.displayValue = '';
    this.currentOperation = '';
    this.firstOperand = null;
    this.waitingForSecondOperand = false;
    this.squareRoot = null;
    this.randomString = '';
  }


  calculateSquareRoot() {
    const value = parseFloat(this.displayValue);
    if (value < 0) {
      this.squareRoot = null;
    } else {
      this.calculatorFromApi('square_root', value, 0);      
    }
  }

  calculatorFromApi(operation: string, firstOperand: number, secondOperand: number): void {
    this.calculatorService.operation(operation, firstOperand, secondOperand).subscribe({
      next: result => {
        if (result != undefined && result != null) {
          this.displayValue = String(result);
          this.firstOperand = Number(result);
        } else {
          this.displayValue = '';
        }
      },
      error: error => {
        console.error('Erro na operação:', error);
        this.displayValue = ''; 
      }
    });
  }


  // Método para gerar uma string aleatória
  generateRandomString() {
    //const length = 10; // Defina o comprimento da string aleatória conforme necessário
    //const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    //this.randomString = Array.from({ length }, () => charset.charAt(Math.floor(Math.random() * charset.length))).join('');
    this.calculatorFromApi('random_string', 0, 0);      
  }
}
