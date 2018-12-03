import React, { Component } from 'react';

export default class PageTracker extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <nav>
				<ul class="pagination">
					<li class="page-item">
						<a class="page-link" href="#">Previous</a>
					</li>
					<li class="page-item">
						<a class="page-link" href="#">Next</a>
					</li>
				</ul>
			</nav> 
    )
  }
}