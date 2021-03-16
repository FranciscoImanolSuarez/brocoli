import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import styles from './InputIcon.module.css';

const InputIcon = ( { children, title } ) => {
    return (
        <div className={classNames(styles.input-icon)}>
            {children}
        </div>
    );
};

InputIcon.propTypes = {
    children: PropTypes.node.isRequired,
}

InputIcon.defaultProps = {
    
}
export default InputIcon