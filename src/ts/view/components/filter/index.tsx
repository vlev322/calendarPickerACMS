import React, { Component } from "react";

import { FilterWrapper } from "./filterWrapper";
import { FilterItem } from "./filterItem";

export class Filter extends Component<{}, {}> {
	public render(): JSX.Element {
		return (
			<FilterWrapper>
				<ul>
					<FilterItem title="Lorem Discount">
						<div className="subcontent">
							<button>Prime time</button>
							<button>Discount</button>
						</div>
					</FilterItem>
					<FilterItem title="Lorem date picker">
						<div className="subcontent">
							<input type="date" name="" id="" />
							<input type="date" name="" id="" />
						</div>
					</FilterItem>
					<FilterItem title="Lorem date picker">
						<div className="subcontent">
							<input type="date" name="" id="" />
							<input type="date" name="" id="" />
						</div>
					</FilterItem>
					<FilterItem title="Lorem date picker">
						<div className="subcontent">
							<input type="date" name="" id="" />
							<input type="date" name="" id="" />
						</div>
					</FilterItem>
					<FilterItem title="Lorem date picker">
						<div className="subcontent">
							<input type="date" name="" id="" />
							<input type="date" name="" id="" />
						</div>
					</FilterItem>
				</ul>
			</FilterWrapper>
		);
	}
}
