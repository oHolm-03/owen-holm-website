import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { RippleModule } from 'primeng/ripple';
import { NgClass, NgIf } from '@angular/common';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, MenubarModule, BadgeModule, RippleModule, NgClass, NgIf],
  templateUrl: './menubar.html',
  styleUrl: './menubar.css'
})
export class AppMenuBar implements OnInit {
  protected readonly title = signal('owen-holm-website');

  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: '/',
      },
      {
        label: 'Research',
        icon: 'pi pi-search',
        badge: '3',
        items: [
          {
            label: 'AI Research',
            icon: 'pi pi-bolt',
            shortcut: '⌘+S',
            routerLink: '/research/ai',
          },
          {
            label: 'Misc. Research',
            icon: 'pi pi-server',
            shortcut: '⌘+B',
            routerLink: '/research/misc',
          },
          {
            separator: true,
          },
        ],
      },
    ];
  }
}