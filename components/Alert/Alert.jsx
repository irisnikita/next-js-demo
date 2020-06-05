import React from 'react'
import cn from 'classnames'

import styles from './styles.module.scss'

export default function Alert({ children, type }) {
    return (
        <div
            className={cn({
                [styles.success]: type === 'success',
                [styles.error]: type === 'error'
            })}
        >
            {children ? children : 'no thing'}
        </div>
    )
}
