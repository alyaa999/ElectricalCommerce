import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DetailsComponent } from "../../Components/dashboard/details/details.component";

@Component({
  selector: 'app-dashboard',
  imports: [RouterModule, CommonModule, DetailsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  sidebarCollapsed = false;
 // currentUser: User | null = null;
  currentRoute = '';
  isMobile = false;
  mobileBreakpoint = 992; // Bootstrap lg breakpoint

  constructor(
   // private authService: AuthService,
   // private router: Router
  ) {
    // Track route changes for active menu highlighting
    // this.router.events.pipe(
    //   filter(event => event instanceof NavigationEnd)
    // ).subscribe((event: any) => {
    //   this.currentRoute = event.url;
      
    //   // Auto-close sidebar on mobile when navigating
    //   if (this.isMobile && !this.sidebarCollapsed) {
    //     this.sidebarCollapsed = true;
    //   }
    // });
  }

  ngOnInit(): void {
    // this.currentUser = this.authService.getCurrentUser();
    // this.checkIfMobile();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkIfMobile();
  }

  checkIfMobile() {
    this.isMobile = window.innerWidth < this.mobileBreakpoint;
    
    // Collapse sidebar by default on mobile
    if (this.isMobile && !this.sidebarCollapsed) {
      this.sidebarCollapsed = true;
    }
  }

  toggleSidebar(): void {
    this.sidebarCollapsed = !this.sidebarCollapsed;
    
    // Special handling for mobile
    if (this.isMobile) {
      document.body.style.overflow = this.sidebarCollapsed ? 'auto' : 'hidden';
    }
  }

  isActive(route: string): boolean {
    return this.currentRoute.startsWith(route);
  }

  logout(): void {
    // this.authService.logout();
    // this.router.navigate(['/login']);
  }

  // Prevent content scrolling when sidebar is open on mobile
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (this.isMobile && !this.sidebarCollapsed) {
      window.scrollTo(0, 0);
    }
  }
}
