import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutCollegeComponent } from './about-college/about-college.component';
import { CampusComponent } from './campus/campus.component';
import { FacultyDetailsComponent } from './faculty-details/faculty-details.component';
import { DepartmentComponent } from './department/department.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { LabWorkshopComponent } from './lab-workshop/lab-workshop.component';
import { AttachmentsComponent } from './attachments/attachments.component';
import { CompanyComponent } from './company/company.component';
import { PlacementComponent } from './placement/placement.component';
import { WomenCellComponent } from './women-cell/women-cell.component';
import { SsipCellComponent } from './ssip-cell/ssip-cell.component';
import { AntiRaggingCellComponent } from './anti-ragging-cell/anti-ragging-cell.component';
import { GrievanceCellComponent } from './grievance-cell/grievance-cell.component';
import { NewsComponent } from './news/news.component';
import { EventsGallaryComponent } from './events-gallary/events-gallary.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';

import { AddComponent } from './about-college/add/add.component';
import { AddCompanyComponent } from './company/add-company/add-company.component';
import { AddFacultyComponent } from './faculty-details/add-faculty/add-faculty.component';
import { DetailFacultyComponent } from './faculty-details/detail-faculty/detail-faculty.component';
import { AddLabWorkshopComponent } from './lab-workshop/add-lab-workshop/add-lab-workshop.component';
import { DetailLabWorkshopComponent } from './lab-workshop/detail-lab-workshop/detail-lab-workshop.component';
import { AddPlacementComponent } from './placement/add-placement/add-placement.component';
import { DetailPlacementComponent } from './placement/detail-placement/detail-placement.component';
import { AddPlacementMemberComponent } from './placement/members/add-placement-member/add-placement-member.component';
import { ViewPlacementMemberComponent } from './placement/members/view-placement-member/view-placement-member.component';
import { ViewPlacementAttachmentComponent } from './placement/attachments/view-placement-attachment/view-placement-attachment.component';
import { AddPlacementAttachmentComponent } from './placement/attachments/add-placement-attachment/add-placement-attachment.component';

 
const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'aboutCollege', component: AboutCollegeComponent },
  { path: 'campus', component: CampusComponent },

  { path: 'faculty', component: FacultyDetailsComponent },
  { path: 'faculty/add', component: AddFacultyComponent },
  { path: 'faculty/details', component: DetailFacultyComponent },

  { path: 'department', component: DepartmentComponent },
  { path: 'subjects', component: SubjectsComponent },

  { path: 'labandworkshop', component: LabWorkshopComponent },
  { path: 'labandworkshop/add', component: AddLabWorkshopComponent },
  { path: 'labandworkshop/details', component: DetailLabWorkshopComponent },

  { path: 'attachments', component: AttachmentsComponent },

  { path: 'company', component: CompanyComponent },
  { path: 'company/add', component: AddCompanyComponent },
  
  { path: 'placementcell', component: PlacementComponent },
  { path: 'placementcell/add', component: AddPlacementComponent },
  { path: 'placementcell/details', component: DetailPlacementComponent },
  { path: 'placementcell/add-attachment', component: AddPlacementAttachmentComponent },
  { path: 'placementcell/view-attachment', component: ViewPlacementAttachmentComponent },
  { path: 'placementcell/add-member', component: AddPlacementMemberComponent },
  { path: 'placementcell/view-member', component: ViewPlacementMemberComponent },

  { path: 'womencell', component: WomenCellComponent },
  { path: 'ssipcell', component: SsipCellComponent },
  { path: 'antiRaggingcell', component: AntiRaggingCellComponent },
  { path: 'grievancecell', component: GrievanceCellComponent },
  { path: 'news', component: NewsComponent },
  { path: 'events', component: EventsGallaryComponent },
  { path: 'achievements', component: AchievementsComponent },
  { path: 'contactinfo', component: ContactInfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  DashboardComponent,
  AboutCollegeComponent,
  CampusComponent,
  FacultyDetailsComponent,
  DepartmentComponent,
  SubjectsComponent,
  LabWorkshopComponent,
  AttachmentsComponent,
  CompanyComponent,
  PlacementComponent,
  WomenCellComponent,
  SsipCellComponent,
  AntiRaggingCellComponent,
  GrievanceCellComponent,
  NewsComponent,
  EventsGallaryComponent,
  AchievementsComponent,
  ContactInfoComponent,

  AddComponent,
  AddCompanyComponent,
  AddFacultyComponent,
  DetailFacultyComponent,
  AddLabWorkshopComponent,
  DetailLabWorkshopComponent,
  AddPlacementComponent,
  DetailPlacementComponent,
  AddPlacementMemberComponent,
  ViewPlacementMemberComponent,
  ViewPlacementAttachmentComponent,
  AddPlacementAttachmentComponent
]
