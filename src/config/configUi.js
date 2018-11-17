import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faUsers,
    faHome,
    faCalendarAlt,
    faSearch,
    faPlus,
    faTimes,
} from '@fortawesome/free-solid-svg-icons'
import moment from 'moment'
import 'moment/locale/fr'
import 'react-dates/initialize'

const configUI = () => {
    library.add(
        faUsers,
        faHome,
        faCalendarAlt,
        faSearch,
        faPlus,
        faTimes,
    )

    // config locale moment
    moment.locale('fr')
}

export default configUI;
