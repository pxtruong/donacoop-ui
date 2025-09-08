import { Observable, Subscription } from 'rxjs';

export abstract class Subscribable {
  protected subscriptions: Set<Subscription> = new Set();

  protected subcribe<T>(
    observable: Observable<T>,
    handler: (value: T) => void,
    errorHandler?: (error: any) => void
  ): void {
    const subscription = observable.subscribe({
      next: handler,
      error:
        errorHandler ||
        ((error) => console.error('Subscription error:', error)),
    });

    this.addSubscription(subscription);
  }
  protected addSubscription(subscription: Subscription): void {
    this.subscriptions.add(subscription);
  }
}
