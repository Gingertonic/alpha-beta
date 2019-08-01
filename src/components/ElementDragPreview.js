import React, { useEffect, useState, memo } from 'react';
import CraftElement from './CraftElement';

const styles = {
    display: 'inline-block',
    // transform: 'rotate(-7deg)',
    // WebkitTransform: 'rotate(-7deg)'
}

const ElementDragPreview = memo(({ title }) => {
    const [tickTock, setTickTock] = useState(false)

    useEffect(
        function subscribeToIntervalTick() {
            const int = setInterval(() => setTickTock(!tickTock), 500)
            return () => clearInterval(int)
        }, [tickTock]
    )
    return (
        <div style={styles}>
            <CraftElement title={title} />
        </div>
    )
})

export default ElementDragPreview