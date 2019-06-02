import React, { Component } from 'react';
import Transition from 'react-transition-group/Transition';
import TweenMax from 'gsap/umd/TweenMax';
import DeleteIcon from '../../delete-icon';
import Validations from '../../validations';

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.handleOnEnter = this.handleOnEnter.bind(this);
    this.handleOnExit = this.handleOnExit.bind(this);
    this.registerAnimationCallback = this.registerAnimationCallback.bind(this);
  }
  handleOnEnter(node) {
    TweenMax.from(node, 0.3, {
      height: 0,
      alpha: 0,
      delay: 2,
      onComplete: this.animationCallback,
    });
  }
  handleOnExit(node) {
    TweenMax.to(node, 0.3, {
      display: 'none',
      alpha: 0,
      height: 'auto',
      onComplete: this.animationCallback,
    });
  }
  registerAnimationCallback(node, done) {
    this.animationCallback = done;
  }
  render() {
    const { props } = this;
    const deleteIcon = props.id ? <DeleteIcon id={props.id} deleteNote={props.deleteNote} /> : null;
    const columnClassName = props.id ? 'list__column--left' : 'list__column--empty';
    const rowClassName = props.id ? 'list__row' : 'list__row empty';
    const validations = props.validations.length > 0 ? <Validations validations={props.validations} /> : null;
    return (
      <Transition
        {...this.props}
        onEnter={this.handleOnEnter}
        onExit={this.handleOnExit}
        addEndListener={this.registerAnimationCallback}
        unmountOnExit={false}
      >
        <div className={rowClassName}>
          <div className={columnClassName}>
            {props.text}
            {validations}
          </div>
          <div className="list__column--right">
            {deleteIcon}
          </div>
        </div>
      </Transition>
    );
  }
}

export default ListItem;
