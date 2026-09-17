import { Component } from '@angular/core';

import { MadeLove } from '../../components/made-love/made-love';
import { Specialties } from '../../components/specialties/specialties';
import { Creations } from '../../components/creations/creations';
import { Features } from '../../components/features/features';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MadeLove,
    Specialties,
    Creations,
    Features
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {}