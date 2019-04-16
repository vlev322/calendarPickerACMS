import React from 'react';

export default class TestCompoment extends React.Component<{}, {height:any, left: any, top: any }>  {
  handleChange = (event: { target: { value: string | number; }; }) => {
    let height = +event.target.value * 3;
		this.setState({ height });		
  }
  _onMouseMove(e: { stopPropagation: () => void; currentTarget: any; pageX: number; pageY: number; }) {
    e.stopPropagation();
    const wrapper = e.currentTarget;
    const intervalBlock = wrapper.firstElementChild;

    const intervalBlockWidth = intervalBlock.offsetWidth;
    const intervalBlockHeight = intervalBlock.offsetHeight;
    const parrentWidth = wrapper.offsetWidth - intervalBlockWidth;
    const parrentHeight = wrapper.offsetHeight - intervalBlockHeight;

    let left = e.pageX - wrapper.offsetLeft;
    let top = e.pageY - wrapper.offsetTop;
    let checkOverflow = left <= 0 || top <= 0 || parrentWidth < left + 3 || parrentHeight < top + 3;

		// const parrent = e.currentTarget;
		// let newTimeBlock = document.createElement('div');
		// newTimeBlock.className = 'circle';
		// newTimeBlock.style.height = `${20}px`;
		// newTimeBlock.style.top = `${top}px`;
		// newTimeBlock.style.left = `${left}px`;		
		// parrent.appendChild(newTimeBlock);		

    if (checkOverflow) return;
    this.setState({ left, top });
	}
	
	_onMouseClick(e: any){
		const parrent = e.currentTarget;
		let newTimeBlock = document.createElement('div');
		newTimeBlock.className = 'circle';
		newTimeBlock.style.height = `${this.state.height}px`;
		newTimeBlock.style.top = `${this.state.top}px`;
		newTimeBlock.style.left = `${this.state.left}px`;
		console.log(this.state);
		
		parrent.appendChild(newTimeBlock);
	}

  render() {
    return (
      <div>
        <select  onChange={this.handleChange}>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="60">60</option>
        </select>
        <div className='wrapper' onClick={this._onMouseClick.bind(this)} onMouseMove={this._onMouseMove.bind(this)}>
          <div style={this.state} className='circle' />
        </div>
      </div>

    )
  }
}