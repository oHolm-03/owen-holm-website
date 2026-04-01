import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppMenuBar } from './core/menubar/menubar';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppMenuBar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('owen-holm-website');
    private activatedRoute = inject(ActivatedRoute);

}