import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

const Icon = ({ icon, className }) => (
    <FontAwesomeIcon icon={icon} className={classNames(["icon", className])} />
);

export default Icon;
