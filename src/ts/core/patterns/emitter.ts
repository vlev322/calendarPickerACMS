export type TEventListener<S> = (state: S) => void;

export class Emitter<T> {
	protected _listeners: Set<TEventListener<T>> = new Set();

	protected emit(state: T): void {
		this._listeners.forEach(
			(listener: TEventListener<T>): void => {
				listener(state);
			}
		);
	}

	public get countListeners(): number {
		return this._listeners.size;
	}

	public subscribe(listener: TEventListener<T>): () => void {
		this._listeners.add(listener);
		return this._unsubscribe.bind(this, listener);
	}

	private _unsubscribe(listener: TEventListener<T>): void {
		this._listeners.delete(listener);
	}
}
