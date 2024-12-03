import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { ContatoComponent } from './contato/contato.component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "sobre", component: SobreComponent},
    {path: "habilidades", component: HabilidadesComponent},
    {path: "contato", component: ContatoComponent}
];
