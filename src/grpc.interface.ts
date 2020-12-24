import { Observable } from "rxjs";

export interface IGrpcService {
    shoutOut(message: IString): Observable<any>
}

interface IString {
    message: string
}