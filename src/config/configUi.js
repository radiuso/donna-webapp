import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faUsers,
    faUser,
    faHome,
    faCalendarAlt,
    faCalendar,
    faSearch,
    faPlus,
    faTimes,
    faShoppingBag,
    faCartArrowDown,
    faCheck,
} from '@fortawesome/free-solid-svg-icons'
import moment from 'moment'
import 'moment/locale/fr'
import 'react-dates/initialize'

const configUI = () => {
    library.add(
        faUsers,
        faUser,
        faHome,
        faCalendarAlt,
        faCalendar,
        faSearch,
        faPlus,
        faTimes,
        faShoppingBag,
        faCartArrowDown,
        faCheck,
    )

    // config locale moment
    moment.locale('fr')
}

export default configUI;
