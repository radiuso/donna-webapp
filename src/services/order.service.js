export const getStatusLabel = (status) => {
    switch (status) {
        case 1:
            return 'Commandée'
        case 2:
            return 'Préparée'
        case 3:
            return 'Livrée'
        case 4:
            return 'Annulée'
        default:
            return status
    }
}