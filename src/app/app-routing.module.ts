import { AntiRaggingAttachment } from './models/anti_ragging/anti-ragging_attachments.model';
import { Placement } from './models/placement/placement_details.model';
import { PlacementAttachment } from './models/placement/placement_attachments.model';
import { LabAndWorkshop } from 'src/app/models/labAndWorkshop.model';
import { Subject } from 'rxjs';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoleConstant } from "./common/roleConstant";
import { AuthGuardService } from '../services/auth-guard.service';

import { LoginComponent } from './login/login.component';
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
import { AddWomenCellComponent } from './women-cell/add-women-cell/add-women-cell.component';
import { AddWomenCellAttachmentsComponent } from './women-cell/attachments/add-women-cell-attachments/add-women-cell-attachments.component';
import { ViewWomenCellAttachmentsComponent } from './women-cell/attachments/view-women-cell-attachments/view-women-cell-attachments.component';
import { AddWomenCellMembersComponent } from './women-cell/members/add-women-cell-members/add-women-cell-members.component';
import { ViewWomenCellMembersComponent } from './women-cell/members/view-women-cell-members/view-women-cell-members.component';

import { SsipCellComponent } from './ssip-cell/ssip-cell.component';
import { AddSsipComponent } from './ssip-cell/add-ssip/add-ssip.component';
import { AddSsipAttachmentsComponent } from './ssip-cell/attachments/add-ssip-attachments/add-ssip-attachments.component';
import { ViewSsipAttachmentsComponent } from './ssip-cell/attachments/view-ssip-attachments/view-ssip-attachments.component';
import { AddSsipMemberComponent } from './ssip-cell/members/add-ssip-member/add-ssip-member.component';
import { ViewSsipMemberComponent } from './ssip-cell/members/view-ssip-member/view-ssip-member.component';


import { AntiRaggingCellComponent } from './anti-ragging-cell/anti-ragging-cell.component';
import { AddAntiRaggingCellComponent } from './anti-ragging-cell/add-anti-ragging-cell/add-anti-ragging-cell.component';
import { AddAntiRaggingCellAttachmentsComponent } from './anti-ragging-cell/attachments/add-anti-ragging-cell-attachments/add-anti-ragging-cell-attachments.component';
import { ViewAntiRaggingCellAttachmentsComponent } from './anti-ragging-cell/attachments/view-anti-ragging-cell-attachments/view-anti-ragging-cell-attachments.component';
import { AddAntiRaggingCellMembersComponent } from './anti-ragging-cell/members/add-anti-ragging-cell-members/add-anti-ragging-cell-members.component';
import { ViewAntiRaggingCellMembersComponent } from './anti-ragging-cell/members/view-anti-ragging-cell-members/view-anti-ragging-cell-members.component';

import { GrievanceCellComponent } from './grievance-cell/grievance-cell.component';
import { AddGrievanceCellComponent } from './grievance-cell/add-grievance-cell/add-grievance-cell.component';
import { AddGrievanceCellAttachmentsComponent } from './grievance-cell/attachments/add-grievance-cell-attachments/add-grievance-cell-attachments.component';
import { ViewGrievanceCellAttachmentsComponent } from './grievance-cell/attachments/view-grievance-cell-attachments/view-grievance-cell-attachments.component';
import { AddGrievanceCellMembersComponent } from './grievance-cell/members/add-grievance-cell-members/add-grievance-cell-members.component';
import { ViewGrievanceCellMembersComponent } from './grievance-cell/members/view-grievance-cell-members/view-grievance-cell-members.component';
import { GrievanceComplaintViewComponent } from './grievance-cell/grievance-complaint-view/grievance-complaint-view.component';

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

import { AddDepartmentComponent } from './department/add-department/add-department.component';
import { ViewDepartmentComponent } from './department/view-department/view-department.component';

import { AddSubjectsComponent } from './subjects/add-subjects/add-subjects.component';
import { AddNewsComponent } from './news/add-news/add-news.component';
import { AddEventsGallaryComponent } from './events-gallary/add-events-gallary/add-events-gallary.component';
import { AddCampusComponent } from './campus/add-campus/add-campus.component';
import { AddAttachmentsComponent } from './attachments/add-attachments/add-attachments.component';
import { AddContactInfoComponent } from './contact-info/add-contact-info/add-contact-info.component';
import { AddAchievementsComponent } from './achievements/add-achievements/add-achievements.component';
import { ViewAchievementsComponent } from './achievements/view-achievements/view-achievements.component';

import { StudentSectionComponent } from './student-section/student-section.component';
import { AddStudentSectionComponent } from './student-section/add-student-section/add-student-section.component';
import { ViewStudentSectionComponent } from './student-section/view-student-section/view-student-section.component';

import { NssComponent } from './nss/nss.component';
import { AddNssComponent } from './nss/add-nss/add-nss.component';
import { ViewNssComponent } from './nss/view-nss/view-nss.component';

import { AffiliationComponent } from './affiliation/affiliation.component';
import { AddAffiliationComponent } from './affiliation/add-affiliation/add-affiliation.component';
import { ViewAffiliationComponent } from './affiliation/view-affiliation/view-affiliation.component';


const routes: Routes = [
  { path: '', component: DashboardComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [!AuthGuardService] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService], data: RoleConstant.Dashboard },

  { path: 'aboutCollege', component: AboutCollegeComponent, canActivate: [AuthGuardService], data: RoleConstant.AboutCollege },
  { path: 'aboutCollege/add', component: AddComponent, canActivate: [AuthGuardService], data: RoleConstant.AboutCollege },

  { path: 'campus', component: CampusComponent, canActivate: [AuthGuardService], data: RoleConstant.Campus },
  { path: 'campus/add', component: AddCampusComponent, canActivate: [AuthGuardService], data: RoleConstant.Campus },

  { path: 'faculty', component: FacultyDetailsComponent, canActivate: [AuthGuardService], data: RoleConstant.FacultyDetails },
  { path: 'faculty/add', component: AddFacultyComponent, canActivate: [AuthGuardService], data: RoleConstant.FacultyDetails },
  { path: 'faculty/details', component: DetailFacultyComponent, canActivate: [AuthGuardService], data: RoleConstant.FacultyDetails },

  { path: 'department', component: DepartmentComponent, canActivate: [AuthGuardService], data: RoleConstant.Department },
  { path: 'department/add', component: AddDepartmentComponent, canActivate: [AuthGuardService], data: RoleConstant.Department },
  { path: 'department/view-department', component: ViewDepartmentComponent, canActivate: [AuthGuardService], data: RoleConstant.Department },

  { path: 'subjects', component: SubjectsComponent, canActivate: [AuthGuardService], data: RoleConstant.Subjects },
  { path: 'subjects/add', component: AddSubjectsComponent, canActivate: [AuthGuardService], data: RoleConstant.Subjects },

  { path: 'labandworkshop', component: LabWorkshopComponent, canActivate: [AuthGuardService], data: RoleConstant.LabAndWorkshop },
  { path: 'labandworkshop/add', component: AddLabWorkshopComponent, canActivate: [AuthGuardService], data: RoleConstant.LabAndWorkshop },
  { path: 'labandworkshop/details', component: DetailLabWorkshopComponent, canActivate: [AuthGuardService], data: RoleConstant.LabAndWorkshop },

  { path: 'attachments', component: AttachmentsComponent, canActivate: [AuthGuardService], data: RoleConstant.Attachment },
  { path: 'attachments/add', component: AddAttachmentsComponent, canActivate: [AuthGuardService], data: RoleConstant.Attachment },

  { path: 'company', component: CompanyComponent, canActivate: [AuthGuardService], data: RoleConstant.Company },
  { path: 'company/add', component: AddCompanyComponent, canActivate: [AuthGuardService], data: RoleConstant.Company },

  { path: 'placementcell', component: PlacementComponent, canActivate: [AuthGuardService], data: RoleConstant.PlacementDetails },
  { path: 'placementcell/add', component: AddPlacementComponent, canActivate: [AuthGuardService], data: RoleConstant.PlacementDetails },
  { path: 'placementcell/details', component: DetailPlacementComponent, canActivate: [AuthGuardService], data: RoleConstant.PlacementDetails },
  { path: 'placementcell/add-attachment', component: AddPlacementAttachmentComponent, canActivate: [AuthGuardService], data: RoleConstant.PlacementAttachment },
  { path: 'placementcell/view-attachment', component: ViewPlacementAttachmentComponent, canActivate: [AuthGuardService], data: RoleConstant.PlacementAttachment },
  { path: 'placementcell/add-member', component: AddPlacementMemberComponent, canActivate: [AuthGuardService], data: RoleConstant.PlacementMembers },
  { path: 'placementcell/view-member', component: ViewPlacementMemberComponent, canActivate: [AuthGuardService], data: RoleConstant.PlacementMembers },

  { path: 'womencell', component: WomenCellComponent, canActivate: [AuthGuardService], data: RoleConstant.WomenDetails },
  { path: 'womencell/add', component: AddWomenCellComponent, canActivate: [AuthGuardService], data: RoleConstant.WomenDetails },
  { path: 'womencell/add-attachments', component: AddWomenCellAttachmentsComponent, canActivate: [AuthGuardService], data: RoleConstant.WomenAttachment },
  { path: 'womencell/view-attachments', component: ViewWomenCellAttachmentsComponent, canActivate: [AuthGuardService], data: RoleConstant.WomenAttachment },
  { path: 'womencell/add-member', component: AddWomenCellMembersComponent, canActivate: [AuthGuardService], data: RoleConstant.WomenMembers },
  { path: 'womencell/view-member', component: ViewWomenCellMembersComponent, canActivate: [AuthGuardService], data: RoleConstant.WomenMembers },

  { path: 'ssipcell', component: SsipCellComponent, canActivate: [AuthGuardService], data: RoleConstant.SSIPDetails },
  { path: 'ssipcell/add', component: AddSsipComponent, canActivate: [AuthGuardService], data: RoleConstant.SSIPDetails },
  { path: 'ssipcell/add-attachments', component: AddSsipAttachmentsComponent, canActivate: [AuthGuardService], data: RoleConstant.SSIPAttachment },
  { path: 'ssipcell/view-attachments', component: ViewSsipAttachmentsComponent, canActivate: [AuthGuardService], data: RoleConstant.SSIPAttachment },
  { path: 'ssipcell/add-member', component: AddSsipMemberComponent, canActivate: [AuthGuardService], data: RoleConstant.SSIPMembers },
  { path: 'ssipcell/view-member', component: ViewSsipMemberComponent, canActivate: [AuthGuardService], data: RoleConstant.SSIPMembers },

  { path: 'antiRaggingcell', component: AntiRaggingCellComponent, canActivate: [AuthGuardService], data: RoleConstant.AntiRaggingDetails },
  { path: 'antiRaggingcell/add', component: AddAntiRaggingCellComponent, canActivate: [AuthGuardService], data: RoleConstant.AntiRaggingDetails },
  { path: 'antiRaggingcell/add-attachments', component: AddAntiRaggingCellAttachmentsComponent, canActivate: [AuthGuardService], data: RoleConstant.AntiRaggingAttachment },
  { path: 'antiRaggingcell/view-attachments', component: ViewAntiRaggingCellAttachmentsComponent, canActivate: [AuthGuardService], data: RoleConstant.AntiRaggingAttachment },
  { path: 'antiRaggingcell/add-member', component: AddAntiRaggingCellMembersComponent, canActivate: [AuthGuardService], data: RoleConstant.AntiRaggingMembers },
  { path: 'antiRaggingcell/view-member', component: ViewAntiRaggingCellMembersComponent, canActivate: [AuthGuardService], data: RoleConstant.AntiRaggingMembers },

  { path: 'grievancecell', component: GrievanceCellComponent, canActivate: [AuthGuardService], data: RoleConstant.GrievanceDetails },
  { path: 'grievancecell/add', component: AddGrievanceCellComponent, canActivate: [AuthGuardService], data: RoleConstant.GrievanceDetails },
  { path: 'grievancecell/add-attachments', component: AddGrievanceCellAttachmentsComponent, canActivate: [AuthGuardService], data: RoleConstant.GrievanceAttachment },
  { path: 'grievancecell/view-attachments', component: ViewGrievanceCellAttachmentsComponent, canActivate: [AuthGuardService], data: RoleConstant.GrievanceAttachment },
  { path: 'grievancecell/add-member', component: AddGrievanceCellMembersComponent, canActivate: [AuthGuardService], data: RoleConstant.GrievanceMembers },
  { path: 'grievancecell/view-member', component: ViewGrievanceCellMembersComponent, canActivate: [AuthGuardService], data: RoleConstant.GrievanceMembers },
  { path: 'grievancecell/complaint', component: GrievanceComplaintViewComponent, canActivate: [AuthGuardService], data: RoleConstant.GrievanceDetails },

  { path: 'news', component: NewsComponent, canActivate: [AuthGuardService], data: RoleConstant.News },
  { path: 'news/add', component: AddNewsComponent, canActivate: [AuthGuardService], data: RoleConstant.News },

  { path: 'events', component: EventsGallaryComponent, canActivate: [AuthGuardService], data: RoleConstant.CollegeGallary },
  { path: 'events/add', component: AddEventsGallaryComponent, canActivate: [AuthGuardService], data: RoleConstant.CollegeGallary },

  { path: 'achievements', component: AchievementsComponent, canActivate: [AuthGuardService], data: RoleConstant.Achievements },
  { path: 'achievements/add', component: AddAchievementsComponent, canActivate: [AuthGuardService], data: RoleConstant.Achievements },
  { path: 'achievements/view', component: ViewAchievementsComponent, canActivate: [AuthGuardService], data: RoleConstant.Achievements },

  { path: 'contactinfo', component: ContactInfoComponent, canActivate: [AuthGuardService], data: RoleConstant.ContactInfo },
  { path: 'contact-info/add', component: AddContactInfoComponent, canActivate: [AuthGuardService], data: RoleConstant.ContactInfo },

  { path: 'student-section', component: StudentSectionComponent, canActivate: [AuthGuardService], data: RoleConstant.StudentSection },
  { path: 'student-section/add', component: AddStudentSectionComponent, canActivate: [AuthGuardService], data: RoleConstant.StudentSection },
  { path: 'student-section/view', component: ViewStudentSectionComponent, canActivate: [AuthGuardService], data: RoleConstant.StudentSection },

  { path: 'nss', component: NssComponent, canActivate: [AuthGuardService], data: RoleConstant.NSS },
  { path: 'nss/add', component: AddNssComponent, canActivate: [AuthGuardService], data: RoleConstant.NSS },
  { path: 'nss/view', component: ViewNssComponent, canActivate: [AuthGuardService], data: RoleConstant.NSS },

  { path: 'affiliation', component: AffiliationComponent, canActivate: [AuthGuardService], data: RoleConstant.Affiliation },
  { path: 'affiliation/add', component: AddAffiliationComponent, canActivate: [AuthGuardService], data: RoleConstant.Affiliation },
  { path: 'affiliation/view', component: ViewAffiliationComponent, canActivate: [AuthGuardService], data: RoleConstant.Affiliation }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  LoginComponent,
  DashboardComponent,

  AboutCollegeComponent,
  AddComponent,

  CampusComponent,
  AddCampusComponent,

  FacultyDetailsComponent,
  AddFacultyComponent,
  DetailFacultyComponent,

  DepartmentComponent,
  AddDepartmentComponent,
  ViewDepartmentComponent,

  SubjectsComponent,
  AddSubjectsComponent,

  LabWorkshopComponent,
  AddLabWorkshopComponent,
  DetailLabWorkshopComponent,

  AttachmentsComponent,
  AddAttachmentsComponent,
  ViewAchievementsComponent,

  CompanyComponent,
  AddCompanyComponent,

  PlacementComponent,
  AddPlacementComponent,
  DetailPlacementComponent,
  AddPlacementMemberComponent,
  ViewPlacementMemberComponent,
  ViewPlacementAttachmentComponent,
  AddPlacementAttachmentComponent,

  WomenCellComponent,
  AddWomenCellComponent,
  AddWomenCellAttachmentsComponent,
  ViewWomenCellAttachmentsComponent,
  AddWomenCellMembersComponent,
  ViewWomenCellMembersComponent,

  SsipCellComponent,
  AddSsipComponent,
  AddSsipAttachmentsComponent,
  ViewSsipAttachmentsComponent,
  AddSsipMemberComponent,
  ViewSsipMemberComponent,

  AntiRaggingCellComponent,
  AddAntiRaggingCellComponent,
  AddAntiRaggingCellAttachmentsComponent,
  ViewAntiRaggingCellAttachmentsComponent,
  AddAntiRaggingCellMembersComponent,
  ViewAntiRaggingCellMembersComponent,

  GrievanceCellComponent,
  AddGrievanceCellComponent,
  AddGrievanceCellAttachmentsComponent,
  ViewGrievanceCellAttachmentsComponent,
  AddGrievanceCellMembersComponent,
  ViewGrievanceCellMembersComponent,
  GrievanceComplaintViewComponent,

  NewsComponent,
  AddNewsComponent,

  EventsGallaryComponent,
  AddEventsGallaryComponent,

  AchievementsComponent,
  AddAchievementsComponent,

  ContactInfoComponent,
  AddContactInfoComponent,

  StudentSectionComponent,
  AddStudentSectionComponent,
  ViewStudentSectionComponent,

  NssComponent,
  AddNssComponent,
  ViewNssComponent,

  AffiliationComponent,
  AddAffiliationComponent,
  ViewAffiliationComponent
]
