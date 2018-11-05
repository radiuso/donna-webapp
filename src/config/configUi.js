import { library } from '@fortawesome/fontawesome-svg-core'
import { faUsers, faHome } from '@fortawesome/free-solid-svg-icons'

const configUI = () => {
    library.add(
        faUsers,
        faHome,
    );
};

export default configUI;
