/*
 * Postfacto, a free, open-source and self-hosted retro tool aimed at helping
 * remote teams.
 *
 * Copyright (C) 2016 - Present Pivotal Software, Inc.
 *
 * This program is free software: you can redistribute it and/or modify
 *
 * it under the terms of the GNU Affero General Public License as
 *
 * published by the Free Software Foundation, either version 3 of the
 *
 * License, or (at your option) any later version.
 *
 *
 *
 * This program is distributed in the hope that it will be useful,
 *
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 *
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *
 * GNU Affero General Public License for more details.
 *
 *
 *
 * You should have received a copy of the GNU Affero General Public License
 *
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {SpyDispatcher} from '../spec_helper';

import ApiServerNotFoundPage from './api_server_not_found_page';

describe('ApiServerNotFoundPage', () => {
  let subject;
  beforeEach(() => {
    subject = ReactDOM.render(<ApiServerNotFoundPage/>, root);
  });

  describe('When api server is not found', () => {
    it('displays error details', () => {
      expect($('h1').text()).toContain('Oh no! It\'s broken');
    });

    it('dispatches resetApiServerNotFound when unmounting', () => {
      subject.componentWillUnmount();
      expect(SpyDispatcher).toHaveReceived('resetApiServerNotFound');
    });
  });
});
