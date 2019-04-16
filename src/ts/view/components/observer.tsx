import { Component } from 'react';

import { IStore } from "./../../logic/controllers/modalController";

export abstract class Observer<State> extends Component<{}, State> {
	protected abstract store: IStore<State>;

	private _unsub: () => void = () => { };

	componentWillMount(): void {
		this.setState(this.store.get());
	}

	componentDidMount() {
		this._unsub = this.store.subscribe(
			this.setState.bind(this)
		)
	}

	componentWillUnmount(): void {
		this._unsub();
	}

	public abstract render(): JSX.Element | null;
}
