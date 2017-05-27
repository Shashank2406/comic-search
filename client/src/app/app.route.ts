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
import { AdminComponent } from './admin/admin.component';
import { AuthadminService } from './authadmin.service';
import { SeasonComponent } from './season/season.component';
import { ComicAdminComponent } from './comic-admin/comic-admin.component';




export const rou: Routes=[
    {path:'',component:WelcomeComponent},
    {path:'comic',component:ComicComponent},
    {path:'search',component:SearchComponent},
    {path:'super',component:SuperComponent,
    data:[{
        role:'superadmin'
    }],canActivate: [AuthService],},
    {path:'admin',component:AdminComponent,
    data:[{
        role:'Admin'
    }],canActivate: [AuthadminService],
    children: [
      { path:'season',component:SeasonComponent },
      { path:'comicadmin',component:ComicAdminComponent},
    ]}
    // {path:'season',component:SeasonComponent},
    // {path:'comicadmin',component:ComicAdminComponent}
];