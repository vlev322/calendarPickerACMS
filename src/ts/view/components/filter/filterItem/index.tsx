import React, { Component, Fragment } from "react";

export class FilterItem extends Component<{ title: string }, { isOpen: boolean }> {
	constructor(props: any) {
		super(props);
		this.state = { isOpen: false };
		this.toggle = this.toggle.bind(this);
		this.isOpened = this.isOpened.bind(this);
	}
	toggle() {
		this.setState({ isOpen: !this.state.isOpen });
	}
	isOpened() {
		this.state.isOpen ? this.props.children : '';
	}
	public render(): JSX.Element {
		return (
			<ol>
				<div className="subtitle">
					<div>
						<p onClick={this.toggle}>&#8249;</p>
						<p>{this.state.isOpen}{this.props.title}</p>
					</div>
					<span>&#10006;</span>
				</div>
				{this.isOpened()}
				{/* {this.state.isOpen ? this.props.children : ''} */}
			</ol>
		);
	}
}
