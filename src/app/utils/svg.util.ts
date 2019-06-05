import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

export const loadSvgResources = (ir: MatIconRegistry, ds: DomSanitizer) => {
    const assertDir = "/assets/img/";
    const imgSidebarDir = `${assertDir}sidebar/`;
    const imgDaysDir = `${assertDir}days/`;
    const avatarDir = `${assertDir}avatar/`;

    const days = [0, 1, 2, 3, 4, 5, 6];

    ir.addSvgIcon('day', ds.bypassSecurityTrustResourceUrl(`${imgSidebarDir}day.svg`));
    ir.addSvgIcon('week', ds.bypassSecurityTrustResourceUrl(`${imgSidebarDir}week.svg`));
    ir.addSvgIcon('month', ds.bypassSecurityTrustResourceUrl(`${imgSidebarDir}month.svg`));
    ir.addSvgIcon('project', ds.bypassSecurityTrustResourceUrl(`${imgSidebarDir}project.svg`));
    ir.addSvgIcon('projects', ds.bypassSecurityTrustResourceUrl(`${imgSidebarDir}projects.svg`));

    days.forEach(day => {
        ir.addSvgIcon(`${day}`, ds.bypassSecurityTrustResourceUrl(`${imgDaysDir + day}.svg`));
    });

    ir.addSvgIcon('unassigned', ds.bypassSecurityTrustResourceUrl(`${avatarDir}unassigned.svg`));
    ir.addSvgIconSetInNamespace('avatars', ds.bypassSecurityTrustResourceUrl(`${avatarDir}avatars.svg`));

}