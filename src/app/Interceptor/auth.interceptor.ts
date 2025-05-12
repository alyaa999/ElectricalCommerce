import {HttpInterceptorFn} from '@angular/common/http';


export const AuthInterceptor: HttpInterceptorFn = (req, next) => {

  // if(localStorage.getItem('token') == null)
  // {
  //   localStorage.setItem('token', 'eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJlLmFobWVkMjY4NEBnbWFpbC5jb20iLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9naXZlbm5hbWUiOiJFaGFiIEFobWVkIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiJmNTRiZTI4Ni05YWQ0LTRiNGUtOTQxMC04Mzg3MmRjNjViODIiLCJleHAiOjE3NDcxNjQwOTAsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjcwMzciLCJhdWQiOiJleUp6ZFdJaU9pSXhNak0wTlRZM09Ea3dJaXdpYm1GdFpTSTZJa3B2YUc0Z1JHOWxJaXdpYVdGMElqb3hOVEUyTWpNNU1ESXlmUSJ9.hbr2wzfu1Ozlf2iZHyaqZHQC5BGV0zSiAkoxAp_BhQM');
  // }

if (localStorage.getItem('token')) {
 req= req.clone({
    setHeaders: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
  })
}
  return next(req);
};

/*
(req.url.includes('cart')||req.url.includes('checkout'))
*/