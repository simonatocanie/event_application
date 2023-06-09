import { Injectable } from "@angular/core";

declare let toastr: any;

@Injectable({
    providedIn: 'root'
})
export class ToastrService {

    success(message: string, title?: string): void {
        toastr.success(message, title)
    }

    info(message: string, title?: string): void {
        toastr.info(message, title)
    }

    warning(message: string, title?: string): void {
        toastr.warning(message, title)
    }

    danger(message: string, title?: string): void {
        toastr.danger(message, title)
    }
}