import { ErrorHandler } from "@angular/core";

export class AppErrorHandler extends ErrorHandler{

    override handleError(error: any): void{
        alert('Error happened...');
        console.log(error);
    }
}