import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';

type ButtonType = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'link';
type ButtonSize = 'small' | 'medium' | 'large';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  type = input<ButtonType>('primary');
  size = input<ButtonSize>('medium');
  disabled = input<boolean>(false);
  loading = input<boolean>(false);
  block = input<boolean>(false);
  submit = input<boolean>(false);
  iconLeft = input<string | undefined>(undefined);
  iconRight = input<string | undefined>(undefined);
  
  buttonClick = output<MouseEvent>();

  handleClick(event: MouseEvent): void {
    if (!this.disabled() || !this.loading()) {
      this.buttonClick.emit(event);
    }
  }
}