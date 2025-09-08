import { LogLevel } from './log-level.model';
import { Subscribable } from './subcribable';

export class BasicExtends extends Subscribable {
  protected logLevel = new LogLevel(`[${this.constructor.name}]`);
}
