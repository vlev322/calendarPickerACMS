import React from 'react';

import { modal } from '../../../../logic/controllers/mediator';
import { Observer } from "../../observer";

export class FilterWrapper extends Observer<{ isOpen: boolean }> {
	protected store = modal;

	public render(): JSX.Element | null {
		if (!this.state.isOpen) return null;
		return (
			<div className='filter'>
				<div className='filter-header'>
					<h1>Filters</h1>
					<p>Clear all</p>
				</div>
				<div className="filter-content">
					{this.props.children}
					<button className='button'>Apply Filters</button>
				</div>
			</div>
		)
	};
}
