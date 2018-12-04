import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

const Icon = ({ icon, className, variant }) => (
    <FontAwesomeIcon icon={icon} className={classNames(["icon", className, `has-text-${variant}`])} />
);

export default Icon;
