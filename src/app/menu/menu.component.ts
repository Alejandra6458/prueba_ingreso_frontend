import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent {
  menuVisible: boolean = false;
  informationVisible: boolean = false;

  informationToggle(): void {
    this.informationVisible = !this.informationVisible;
  }

  menuToggle(): void {
    this.menuVisible = !this.menuVisible;
  }

}
