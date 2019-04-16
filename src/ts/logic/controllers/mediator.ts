import { ModalControl } from "./modalController";

import {
	initial
} from "../strores/modalStore";

const modal = new ModalControl(initial);
const cover = new ModalControl(initial);

modal.subscribe((state) => {
	if (state.isOpen) cover.open();
	else cover.close();
})

export {
	modal, cover
}