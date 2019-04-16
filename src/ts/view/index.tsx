import React, { Component } from "react";

import { Filter } from "./components/filter";
import TestCompoment from "./components/testArea";

export class IndexView extends Component<{}, {}> {
	public render(): JSX.Element {
		return (
			// <Filter />
			<TestCompoment></TestCompoment>			
		);
	}
}
