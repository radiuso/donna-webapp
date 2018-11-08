import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faUsers,
    faHome,
    faCalendarAlt,
    faSearch,
    faPlus,
} from '@fortawesome/free-solid-svg-icons'

const configUI = () => {
    library.add(
        faUsers,
        faHome,
        faCalendarAlt,
        faSearch,
        faPlus,
    );
};

export default configUI;
