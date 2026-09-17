import { CanActivateFn } from '@angular/router';

export const adminGuard: CanActivateFn = () => {

  const isAdmin = localStorage.getItem("admin");

  if(isAdmin === "true"){
    return true;
  }

  alert("Access Denied");
  return false;

};