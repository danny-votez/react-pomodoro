'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Pomodoro from './../Pomodoro';
import { mount, shallow } from 'enzyme';

import { assert } from 'chai';

describe('<Pomodoro />', () => {
  var component; 

  beforeEach(() => {
    component = TestUtils.renderIntoDocument(
      <Pomodoro />
    );
  });

  it('verify the default state are correctly', () => {
    assert.isFalse(component.state.play);
    assert.equal(component.state.time, 1500);
    assert.equal(component.state.timeType, 1500);
    assert.equal(component.state.title, '25:00 | Pomodoro timer');
  });

  it('the options of notification should be unchecked', () => {
    assert.isFalse(component.refs.audio.checked);
    assert.isFalse(component.refs.vibrate.checked);
    assert.isFalse(component.refs.notification.checked);
  });

  it('should be two buttons to control the play and pause', () => {
    let pomodoro  = mount(<Pomodoro />),
        buttons   = pomodoro.find('div.pomodoro div.controlsPlay button');

    assert.equal(buttons.length, 2);

    let playButton = buttons.find('.play').node,
        stopButton = buttons.find('.stop').node;
    
    assert.isDefined(playButton);
    assert.isDefined(stopButton);
  });
});