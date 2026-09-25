import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';

import { AuthService } from '../../core/auth/auth.service';
import { AuthUser } from '../../core/auth/auth.interface';

/**
 * Dato informativo del parqueadero que se muestra en el Home.
 */
interface ParkingInfoItem {
  label: string;
  value: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    RouterLink,
    IonButton,
    IonButtons,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonContent,
    IonHeader,
    IonItem,
    IonLabel,
    IonList,
    IonTitle,
    IonToolbar
  ]
})
export class HomePage {

  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  readonly user = signal<AuthUser | null>(null);

  // Información fija del parqueadero para la tarjeta del Home
  readonly parkingInfo: ParkingInfoItem[] = [
    { label: 'Horario', value: 'Lunes a sábado, 6:00 a. m. - 10:00 p. m.' },
    { label: 'Dirección', value: 'Calle 10 # 20-30' },
    { label: 'Teléfono', value: '604 123 4567' }
  ];

  async ionViewWillEnter(): Promise<void> {
    this.user.set(
      await this.authService.getStoredUser()
    );
  }

  async logout(): Promise<void> {

    await this.authService.logout();

    await this.router.navigateByUrl('/login', {
      replaceUrl: true
    });
  }
}