import { createElement } from "react";
import ReactDOM from "react-dom";

import { IndexView } from "./index";

export default function render(): void {
	ReactDOM.render(createElement(IndexView), document.getElementById("root"));
}
