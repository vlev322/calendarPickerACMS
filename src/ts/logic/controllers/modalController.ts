import {
	Emitter, TEventListener
} from "../../core/patterns/emitter";

export interface IStore<State> {
	subscribe(listener: TEventListener<State>): () => void;
	close(): void
	open(): void
	get(): State;
}

export class ModalControl extends Emitter<{ isOpen: boolean }> implements IStore<{ isOpen: boolean }> {
	public close = this._close.bind(this);
	public open = this._open.bind(this);

	private _state: { isOpen: boolean };

	constructor(initial: { isOpen: boolean }) {
		super();
		this._state = { ...initial };
	}

	public get(): { isOpen: boolean } {
		return this._state;
	}

	private _close(): void {
		this._state.isOpen = false;
		this.emit(this._state)
	}
	private _open(): void {
		this._state.isOpen = true;
		this.emit(this._state)
	}
}
