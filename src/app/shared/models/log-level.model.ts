import { environment } from '../../../environments/environment';
export class LogLevel {
  private _name: string;

  constructor(_name: string) {
    this._name = _name;
  }

  public debug(...data: any) {
    if (environment.logLevel > 3) {
      console.log(this._name, ...data);
    }
  }

  public error(...data: any) {
    if (environment.logLevel > 0) {
      console.error(this._name, ...data);
    }
  }
}
