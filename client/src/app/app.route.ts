//import { CanActivateViaAuthGuard } from './connector.service';
import { AppComponent } from './app.component';
// import { FormComponent } from './form/form.component';
import { RouterModule,Routes } from '@angular/router';
// import { ChatboxComponent } from './chatbox/chatbox.component';
// import { Configuration} from './config'
import { ComicComponent } from './comic/comic.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SearchComponent } from './search/search.component';
import { SuperComponent } from './super/super.component';
import { AuthService } from './auth.service';


export const rou: Routes=[
    {path:'',component:WelcomeComponent},
    {path:'comic',component:ComicComponent},
    {path:'search',component:SearchComponent},
    {path:'super',component:SuperComponent,
    data:[{
        role:['superadmin','admin']
    }],canActivate: [AuthService],}
];