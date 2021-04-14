import React, { Component } from 'react';
import PropTypes from 'prop-types';

// class Picture extends React.Component {

// }

// <Picture picture="https://media.giphy.com/media/QvBoMEcQ7DQXK/giphy.gif" />

class Picture extends Component {
    static propTypes = {
        picture: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    };

    render() {
        const { picture, description } = this.props;
        return <img src={picture} alt={description} />;
    }
}

// Picture.propTypes = {
//     picture: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired
// };

export default Picture;