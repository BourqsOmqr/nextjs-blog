import { useEffect } from 'react';
import { withRouter } from 'next/router';

function BackToTop({ history }) {
    useEffect(() => {
        const unlisten = history.listen(() => {
            if (window !== undefined) {
                window.scrollTo(0, 0);
            }

        });
        return () => {
            unlisten();
        }
    }, []);

    return (null);
}

export default withRouter(BackToTop);