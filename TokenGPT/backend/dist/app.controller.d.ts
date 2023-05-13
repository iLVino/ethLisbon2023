import { AppService, Contract } from './app.service';
import { Observable } from 'rxjs';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): Observable<Contract>;
    getContractInformation(): any;
}
